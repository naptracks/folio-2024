import { Scroll } from "@react-three/drei";
import { AccordionContent, Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { CgProfile } from "react-icons/cg";
import { IoIosFlash } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiStrong } from "react-icons/gi";
import { Button } from "./ui/button";



export default function Header(props) {


    return (<>
        <group {...props}>

            <Scroll html className='w-full md:w-[41rem] md:mr-4 z-[-1]' >
                <div className='relative bg-white rounded-xl m-4  pb-[5rem] pt-[1rem]'>
                    <div className="m-[2rem] pl-2" >
                        <h1 className="text-[1.4rem] md:text-3xl text-cyan-800" >ensemble,</h1>
                        <h1 className="text-[1.4rem] md:text-3xl text-cyan-800">faisons de grandes choses.</h1>
                    </div>
                    <div className="header-html  ">
                        <Accordion type="single" collapsible className="pr-10">
                            <AccordionItem value="item-3" >
                                <AccordionTrigger >
                                    <div className="flex text-cyan-700">
                                        <CgProfile className="w-8 h-8 mr-4" />
                                        Profile
                                    </div>


                                </AccordionTrigger>
                                <AccordionContent >
                                    Technology lover. A 34ans, je suis un développeur full-stack freelance. À la suite de plusieurs formations et de projets, je suis depuis 2019 un professionnel du web, back-end (NodeJS) et front-end (ReactJS).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger > <div className="flex text-cyan-700">
                                    <GiStrong className="w-8 h-8 mr-4" />
                                    Compétences
                                </div></AccordionTrigger>
                                <AccordionContent>
                                    React.js, Next.js, Node.js, Express.js, Typescript, CMS
                                </AccordionContent>
                                <AccordionContent>
                                    TailwindCSS, MaterialUI, Styled Component, shadcn/ui, .sass
                                </AccordionContent>
                                <AccordionContent>
                                    trpc, SWR, Zustand, Redux, ReactQuery, GraphQL
                                </AccordionContent>
                                <AccordionContent>
                                    Docker, Kubernetes, CI/CD, Git, Github, Gitlab
                                </AccordionContent>
                                <AccordionContent>
                                    Wordpress CMS, Payload CMS
                                </AccordionContent>
                                <AccordionContent>
                                    Firebase, MongoDB, PostgreSQL, Prisma, TypeORM, Heroku, Vercel, Redis
                                </AccordionContent>
                                <AccordionContent>
                                    Framer Motion, GSAP
                                </AccordionContent>
                                <AccordionContent>
                                    three.js, @react-three/fiber, @react-three/drei, @react-three/rapier,...
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger > <div className="flex text-cyan-700">
                                    <IoIosFlash className="w-8 h-8 mr-4" />
                                    Expériences
                                </div></AccordionTrigger>
                                <AccordionContent>
                                    Développeur full-stack freelance depuis 2019, j’ai travaillé pour des clients en France et en Angleterre. J’ai réalisé des projets pour des entreprises et des particuliers dans le secteur de l’e-commerce et l'éducation.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger > <div className="flex text-cyan-700">
                                    <BsGraphUpArrow className="w-8 h-8 mr-4" />
                                    Pourquoi me choisir
                                </div></AccordionTrigger>
                                <AccordionContent>
                                    Enthousiaste et passionné. Je cherche à booster ma carrière en réalisant vos projets, rejoindre une équipe dynamique et vous apporter toute la plus value que vous attendez d’un professionnel du digital.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                        <a href="https://firebasestorage.googleapis.com/v0/b/folio-cm-2024.appspot.com/o/CesarMartel_DevFullStack_CV2024.pdf?alt=media&token=f3c797b3-7583-4b22-bdbd-aa7efc6e9462" target="_blank">
                            <Button className='mt-[3rem] mb-0 w-[10rem] h-[3rem] text-lg bg-cyan-700'>
                                Curriculum Vitae
                            </Button>
                        </a>
                    </div>
                </div>



            </Scroll>

        </group>

    </>

    )
}