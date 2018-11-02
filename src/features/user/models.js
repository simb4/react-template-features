import { env } from '../../constants';


export const User = (u) => ({
  id: u.id,
  phone: u.phone,
  first_name: u.first_name,
  last_name: u.last_name,
  full_name: u.first_name + ' ' + u.last_name,
  email: u.email,
  avatar: env.SITE_URL + u.avatar,
})
