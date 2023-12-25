'use client'
import cls from './Uploader.module.css'
// import {MdCloudUpload, MdDelete} from 'react-icons/md'
// import {AiFillFileImage} from 'react-icons/ai'
const Uploader = () => {
	return (
		<div className={cls.uploader}>
			<input type='file' accept='image/*' className={cls.input} />
		</div>
	)
}

export default Uploader
