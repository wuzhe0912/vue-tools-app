import { required, numeric } from 'vuelidate/lib/validators'
import { regEx } from '@/validators'

export const name = {
  required,
  nameFormat: regEx(/^[\u4e00-\u9fa5a-zA-Z]*$/)
}

export const phone = {
  required,
  numeric
}

export const Required = {
  required
}
