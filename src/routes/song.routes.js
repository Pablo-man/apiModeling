import {Router} from 'express'
import {listSong, createSong, updateSong, deleteSong, editSong} from '../controllers/song.controllers.js'
import { last } from 'underscore'

const router= new Router()

router.get('/', listSong)

router.post('/', createSong)

router.put('/:id', updateSong)

router.delete('/:id', deleteSong)

export default router;