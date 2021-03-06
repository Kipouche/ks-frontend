import { authentification } from '../../../../lib/authentification';
import User from '../../../../lib/user';
import ConvertTime from '../../../../lib/convertTime';
import InputValidation from '../../../../lib/inputValidation';

export default authentification(async (req, res, jwt) => {
  const { profileId } = req.query;

  if (req.method === 'GET') {
    try {
      if (jwt.sub !== parseInt(profileId, 10) && jwt.role === 'member') {
        return res.status(401).json({ message: 'Not authorized' });
      }
      const profile = await User.getByIdClientSide(profileId);
      [profile[0].dateofbirth] = ConvertTime.timeToGMT2(profile[0].dateofbirth)
        .toISOString()
        .split('T');
      return res.status(200).json(profile);
    } catch (error) {
      return res.status(405).json({ message: error.message });
    }
  }
  if (req.method === 'DELETE') {
    return res.status(200).json({ profile: true });
  }
  if (req.method === 'PUT') {
    if (jwt.sub !== parseInt(profileId, 10)) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    const { firstname, lastname, phonenumber, dateofbirth } = req.body;
    if (!firstname || !lastname || !phonenumber || !dateofbirth) {
      return res.status(401).json({ message: 'A field is missing' });
    }
    if (
      !InputValidation.verifyName(lastname) ||
      !InputValidation.verifyName(firstname)
    ) {
      return res.status(401).json({ message: 'Invalid firstname or lastname' });
    }
    if (!InputValidation.verifyPhonenumber(phonenumber)) {
      return res.status(401).json({ message: 'Invalid phone number' });
    }
    if (InputValidation.isLess18ThanYears(dateofbirth)) {
      return res
        .status(401)
        .json({ message: 'User musts be at least 18 years old' });
    }
    try {
      await User.updateProfile(
        profileId,
        firstname,
        lastname,
        phonenumber,
        dateofbirth
      );
      return res.status(200).json({ message: 'Successfull updating profile' });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(405).json({ message: `${req.method} doesn't exists` });
});
