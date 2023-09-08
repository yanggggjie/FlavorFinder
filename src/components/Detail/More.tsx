import { clsx } from 'clsx'
import { last } from 'lodash-es'
import * as QueryString from 'qs'
interface Props {
  moreData: {
    strSource: string
    strYoutube: string
  }
}

function Component({ moreData }: Props) {
  const videoID = last(moreData.strYoutube.split('='))
  return (
    <div>
      <a href={moreData.strSource}></a>
      <a href={moreData.strYoutube}></a>
      <iframe
        className={clsx('w-96 h-64 rounded-xl')}
        src={`https://www.youtube.com/embed/${videoID}`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Component
