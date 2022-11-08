import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Link from 'next/link';

export default function Home({ data }) {
    console.log(data.pageData[0].hero)
    const pageData = data.pageData[0];
    const mobile = data.siteSettings.mobileMenu;
    const siteSettings = data.siteSettings;
    
    return (
        <>
            <SEO 
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <Navbar
                mobileMenu={mobile}
                navigation={siteSettings.navigation}
                logo={urlFor(siteSettings.logo).url()}
            />
            <main className="h-screen w-screen overflow-hidden">
                <section className="h-[500px] bg-cover bg-center md:h-[750px] md:bg-center" style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`}}>
                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
                        <h1 className="text-4xl">{pageData.hero.tagline}</h1>
                        <Button 
                            text={pageData.hero.cta.title}
                            href={pageData.hero.cta.url.slug.current}
                        />
                    </div>
                </section>
                <section className="m-2">
                    <h2 className="text-2xl">Labore do elit adipisicing cillum aliquip elit sunt est amet amet ea qui.</h2>
                    <p>Lorem ea voluptate deserunt sint. Fugiat Lorem officia laboris proident non Lorem mollit exercitation duis deserunt et. Labore nostrud excepteur aute culpa voluptate adipisicing nostrud do Lorem sit in.</p>
                </section>
                {/* <div className="grid grid-cols-1 my-4 gap-4 md:grid-cols-5">
                    <div className="col-span-1 md:col-span-2">
                        <h1 className="text-2xl font-medium mb-2">{pageData.hero.tagline}</h1>
                        <Button
                            text={pageData.hero.cta.title}
                            href={pageData.hero.cta.url.current}
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 w-full h-60 rounded-xl md:h-[85vh]' style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`, backgroundSize: 'cover'}}>
                        <Image
                            src={urlFor(pageData.hero.image).url()}
                            height={100}
                            width={100}
                            className='w-100'
                        />
                    </div>
                </div> */}
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const data = await client.fetch(homepage)
  
    return {
        props: {
            data
        }
    }
}