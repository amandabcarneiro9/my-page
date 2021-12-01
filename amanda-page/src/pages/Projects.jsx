import ProjectType, { ProjectSectionImage, ProjectSectionOverview, ProjectDetails } from '../components/project/Project'
import plurisGif from '../images/pluris-certo.gif'
import dasGif from '../images/das-travel.gif'
import camillaGif from '../images/camilla-chagas.gif'

export function PlurisProject() {
  return (
    <ProjectType projectName="Pluris Engenharia">
      <ProjectSectionImage image={plurisGif}>
        In this project the client asked for use some SEO techniques, and as I was in charge of almost everything as
        Deploying, Design, and the technology I needed to study and find the technology and techniques that would fit
        well to attend client's desires.So I chose NextJs that was perfectly for this project. This frame work offers a
        lot of features that could help to make the page Server Side Rendering using React.js and for me as a junior
        helped me to improve the organization of the folder's structure. Also, one of the features that I used in this
        project from Next.js was Image. This feature gives the basic stuff that you need for sizing and make the image
        look as you want without touching CSS directly.
      </ProjectSectionImage>
      <ProjectSectionOverview
        roleDescriptions="Web developer"
        methodsDescription="Next.js, Sass, Heroku deploy, AWS S3"
        durationDescription="8 weeks"
        status="waiting for client approve for deploy"
        href="https://github.com/amandabcarneiro9/pluris-engenharia"
        href2="https://pluris-engenharia.herokuapp.com/"
      />
    </ProjectType>
  )
}

export function DasTravel() {
  return (
    <ProjectType projectName="DAS Travel App">
      <ProjectSectionImage image={dasGif}>
        In this project the client asked for use some SEO techniques, and as I was in charge of almost everything as
        Deploying, Design, and the technology I needed to study and find the technology and techniques that would fit
        well to attend client's desires.So I chose NextJs that was perfectly for this project. This frame work offers a
        lot of features that could help to make the page Server Side Rendering using React.js and for me as a junior
        helped me to improve the organization of the folder's structure. Also, one of the features that I used in this
        project from Next.js was Image. This feature gives the basic stuff that you need for sizing and make the image
        look as you want without touching CSS directly.
      </ProjectSectionImage>
      <ProjectSectionOverview
        roleDescriptions="Full stack Web developer"
        methodsDescription="PHP,Laravel, MySql, CSS/Sass, HTML5, React.js, Composer, Webpack, Firezilla"
        durationDescription="3 weeks"
        status="Done"
        href=""
        href2="https://pluris-engenharia.herokuapp.com/"
      />
    </ProjectType>
  )
}
