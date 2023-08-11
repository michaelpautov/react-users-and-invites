import { Role } from './role'
import { Status } from './status'
import { UserShortData } from './user-short-data'

export interface TeamMember {
  id: number
  status?: Status
  user: UserShortData
  role: Role
}
