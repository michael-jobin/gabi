'use client'
import React, { useEffect, useRef } from 'react'
import styles from './worksVideo.module.scss'
import Image from 'next/image'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: any
  }
}
interface WorksVideoProps {
  id: string
  slug: string
  thumbnail?: string | null
  caption?: string | null
}

const WorksVideo: React.FC<WorksVideoProps> = ({ id, thumbnail, caption, slug }) => {
  const playerRef = useRef<YT.Player | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player('youtube-player', {
        videoId: '[VIDEO_ID]',
        events: {
          onReady: onPlayerReady,
        },
      })
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag)
  }, [])

  const onPlayerReady = (event: YT.PlayerEvent) => {
    // event.target.cueVideoById(id)
    // event.target.loadVideoById(id)
    // event.target.pauseVideo()
  }

  function addLineBreak(inputText: string): JSX.Element {
    const lines = inputText.split('\n')
    const formattedText = lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ))
    return <>{formattedText}</>
  }

  const playVideo = () => {
    playerRef.current?.playVideo()
    containerRef.current?.classList.add(styles.playing)
  }

  return (
    <div className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        <iframe
          width="100%"
          height="100%"
          id="youtube-player"
          src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.overlay}>
          <button onClick={playVideo} className={styles.play}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.8 70.5">
              <path d="M59.8,28.3c3.8,2.2,5.2,7.1,3,10.9c-0.7,1.2-1.7,2.3-3,3L12,69.4c-3.8,2.2-8.7,0.8-10.9-3c-0.7-1.2-1-2.6-1-4V8c0-4.4,3.6-8,8-8c1.4,0,2.8,0.4,4,1L59.8,28.3z" />
            </svg>
          </button>
        </div>
        {thumbnail && (
          <div className={styles.thumbnail}>
            <Image alt="thumbnail" src={thumbnail} sizes="(max-width: 768px) 100vw, 1000px" fill />
          </div>
        )}
      </div>
      {caption && <p className={`${styles.caption} caption`}>{addLineBreak(caption)}</p>}
    </div>
  )
}

export default WorksVideo
