import { Router } from 'express'
import { AuthenticateUserController } from '@controllers/AuthenticateUserController'
import { CreateMessageController } from '@controllers/CreateMessageController'
import { ensureAuthenticated } from './midlleware/ensureAuthenticated'
import { GetLast3MessagesController } from '@controllers/GetLast3MessagesController'
import { ProfileUserController } from '@controllers/ProfileUserController'

const AuthenticateUser = new AuthenticateUserController()
const Message = new CreateMessageController()
const GetLast3Message = new GetLast3MessagesController()
const ProfileUser = new ProfileUserController()

const router = Router()

router.post('/authenticate', AuthenticateUser.handle)
router.post('/message', ensureAuthenticated, Message.handle)
router.get('/messages/last3', GetLast3Message.handle)
router.get('/profile', ensureAuthenticated, ProfileUser.handle)

export { router }