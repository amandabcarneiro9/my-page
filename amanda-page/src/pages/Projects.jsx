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
        It was a final project from a Bootcamp. The goal was to offer a single-page application that cover some
        technologies that were taught during the Bootcamp as PHP, Laravel, React, and Javascript. The application offers
        to users a brief experience during travel to one of those 3 cities (Warsaw, Rio de Janeiro, and
        Santorini)through learning some simple conversation on local language or having advice for places to go. Through
        this project, we were ahead of everything, and as a team, we create a database that was consumed by the
        application, also used API for maps, and gravatar to use as a profile. On this application, the user can create
        an account and save their favorite phrases also places to visit, edit the profile, send emails to us, and
        recover their password if it is necessary. For the organization, we use Agile techniques and Trello as scrum.
      </ProjectSectionImage>
      <ProjectSectionOverview
        roleDescriptions="Full stack Web developer"
        methodsDescription="PHP,Laravel, MySql, CSS/Sass, HTML5, React.js, Composer, Webpack, Firezilla, Agile"
        durationDescription="3 weeks"
        status="Done but not on the air "
        href="https://github.com/Hourja/sad-final-project"
        nextSteps="As we use the domain and host from Bootcamp, we are on the way to transfer to our domain and host on Godaddy."
        goal="Offer a new way to travel for people who love to travel and to know about about the languages from the places where they goes."
      />
    </ProjectType>
  )
}
