import { loadPage } from './loadPage'
import { hideBackground } from './hideBackground'
import { switchNavMenu } from './switchNavMenu'
import { SwiperGalerry } from './swiperGallery'
import { revealPage } from './revealPage'
import { modalForm } from './modalForm'
import { sendEmail } from './sendEmail'

export const init = () => {
  loadPage()
  hideBackground()
  switchNavMenu()
  SwiperGalerry()
  revealPage()
  modalForm()
  sendEmail()
}
