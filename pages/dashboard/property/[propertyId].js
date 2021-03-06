import Router from 'next/router';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Header from '../../../components/Header';
import DashboardPanel from '../../../components/Dashboard/DashboardPanel';
import PropertyAgentMenu from '../../../components/PropertyAgentMenu';
import PropertyFieldWorkerMenu from '../../../components/PropertyFieldWorkerMenu';
import Modal from '../../../components/Modal';

const Property = ({ authenticated, id, property, profile, role, jwt }) => {
  const [modal, setModal] = useState(false);

  const handleApiLoaded = (map, maps, address) => {
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new maps.Marker({
          position: results[0].geometry.location,
          map,
          animation: maps.Animation.DROP,
          title: { address },
          label: 'A'
        });
        return marker;
      }
      return `Geocode was not successful for the following reason: ${status}`;
    });
  };

  const defaultProps = {
    center: {
      lat: 48.8,
      lng: 2.4
    },
    zoom: 11
  };
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section">
        {modal ? (
          <Modal
            image="https://keyservices.s3.eu-west-3.amazonaws.com/pictures/371_5.jpg"
            id={property.id}
            remove={setModal}
          />
        ) : (
          []
        )}
        <div className="columns">
          <DashboardPanel
            role={role}
            tab="property"
            firstname={jwt.firstname}
          />
          <div className="column auto">
            <figure className="image is-3by1">
              <img
                style={{ objectFit: 'cover' }}
                src={`https://keyservices.s3.eu-west-3.amazonaws.com/pictures/${property.id}_0.jpg`}
                alt="preview"
              />
            </figure>
            <a onClick={()=>setModal(true)} className="has-text-primary">Afficher les photos</a>
            <div className="section columns">
              <div className="column">
                <h1 className="title">{property.title}</h1>
                <p>{property.description}</p>
              </div>
              <div className="column">
                {role === 'agent' || role === 'admin' ? (
                  <PropertyAgentMenu
                    id={id}
                    property={property}
                    profile={profile}
                  />
                ) : (
                  []
                )}
                {role === 'fieldworker' ? (
                  <PropertyFieldWorkerMenu
                    id={id}
                    property={property}
                    profile={profile}
                  />
                ) : (
                  []
                )}
              </div>
            </div>
            <div className="container is-fluid">
              <GoogleMapReact
                style={{ height: `500px` }}
                bootstrapURLKeys={{
                  key: 'AIzaSyCOCwLWsDgniFY8vUK0igKTk_qB1WtGCCk'
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  handleApiLoaded(
                    map,
                    maps,
                    `${property.address} ${property.district}`
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Property.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const { propertyId } = ctx.query;
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  const json = await res.json();
  if (res.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (res.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  const resProperty = await fetch(`${host}/api/agent/property/${propertyId}`, {
    headers: {
      cookie
    }
  });
  if (resProperty.status === 200) {
    const property = await resProperty.json();
    const resProfile = await fetch(`${host}/api/profile/${property.user_id}`, {
      headers: {
        cookie
      }
    });
    const profile = await resProfile.json();
    return {
      authenticated: true,
      id: json.message.sub,
      property,
      profile: profile[0],
      role: json.message.role,
      jwt: json.message
    };
  }
  if (!ctx.req) {
    Router.replace('/dashboard');
  }

  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/dashboard'
    });
    ctx.res.end();
  }
  return {
    authenticated: false
  };
};

export default Property;
