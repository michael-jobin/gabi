import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

//home page 
export interface MvElement {
 mvImageSp: SanityImageSource
 mvImagePc: SanityImageSource
 _key: string
}

export interface HomePageData {
 tags: string[]
 mv: MvElement[]
}

//about page
export interface CareerItem {
 year: string;
 position: string;
 place: string;
 flag?: string;
}

export interface ExhibitionsItem {
 year: string;
 title: string;
 city: string;
}

export interface AboutInfo {
 introduction: any[];
 introductionJp: any[];
 profilePic: SanityImageSource;
 hobbies: string;
 career: CareerItem[];
 exhibitions: ExhibitionsItem[];
}

export interface AboutIntroProps {
 introduction: any[];
 introductionJp: any[];
}

export interface AboutProfileProps {
 exhibitions: ExhibitionsItem[];
 career: CareerItem[];
 hobbies: string;
 profilePic: SanityImageSource;
}

//works page 
export interface InfoItem {
 col1Title?: string
 col1Paragraph?: string
 col1Link?: boolean
 col1LinkText?: string
 col1LinkUrl?: string
 col2Title?: string
 col2Paragraph?: string
 col2Link?: boolean
 col2LinkText?: string
 col2LinkUrl?: string
}

export interface GalleryItem {
 galleryType: string
 galleryImage?: SanityImageSource
 galleryId?: string
 galleryThumbnail?: SanityImageSource
 galleryVideoTitle?: string
 galleryVideoSubtitle?: string
 galleryCaption?: string
 galleryMultiply?: boolean
 galleryFrame?: boolean
 galleryBoxShadow?: boolean
 galleryMargin?: string
 galleryWidth?: string
 slider?: {
  slides: SanityImageSource[]
  slideCaption1?: string[]
  slideCaption2?: string[]
  width: number
  height: number
 }
 galleryCustom?: string
}

export interface Work {
 _id: string;
 title: string
 slug: { current: string }
 date: string
 tags: string[]
 thumbnail?: SanityImageSource

 tools?: Array<string>
 col1?: Array<InfoItem>
 col2?: Array<InfoItem>
 backgroundColor?: { hex: string }
 backgroundColor2?: { hex: string }
 darkBackground: boolean
 backgroundImage: SanityImageSource
 gallery?: GalleryItem[]
};
