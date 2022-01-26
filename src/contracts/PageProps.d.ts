
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps as NextAppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
    layout?: (page: ReactElement) => ReactNode
}

export type AppProps =  NextAppProps & { 
    Component: NextPageWithLayout
}

export interface LayoutProps {
    title?: string;
    page?: ReactElement | ReactNode;
    children?: ReactElement | ReactNode;
}


interface Paginate {
      total: number,
      per_page: number,
      current_page: number,
      last_page: number,
      first_page: number,
      first_page_url: string,
      last_page_url: string,
      next_page_url: ?string,
      previous_page_url: ?string

}

interface Publication {
    id: string;
    author_id: string;
    published_at: string;
    content: string;
    image: string;
    video: string;
    type_publication: string;
    title: string;
    subtitle: string;
}

export interface PublicationProps {
    publication: Publication;
}

export interface PublicationArrayProps {
    publications: Publication[];
}