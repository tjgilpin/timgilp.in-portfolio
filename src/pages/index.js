import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import "tachyons"
import "../css/additional.css"
require("typeface-roboto")

const sectionContainerWrapper =
"flex justify-center nt1 _add-skew _add-bg-"
const sectionContainer =
"w-100 mw9 mh2 mt5 pt4 mh4-m mh5-l nb4 nb5-m nb5-l _add-skew-rev"
const sectionHeading =
"fw4 mt0 mb4 f1 _add-h3-"
const sectionContent = 
"flex flex-column flex-row-l justify-between"
const sectionParagraph =
"f4 fw3 lh-copy mb3 mt0 w-40-l _add-p-"
const sectionImageContainer =
"flex flex-column flex-row-m flex-row-l w-60-l"
const sectionImageContainerLeft =
"flex flex-column flex-row-m justify-between-m flex-row-l w-60-l"
const sectionImageDesktop =
"w-50-m w-50-l pl4-l"
const sectionImageTablet =
"w-34-m w-34-l pl4-m pl4-l"
const sectionImageMobile =
"w-25-m w-25-l pl4-m pl4-l"
const sectionImageMobileAll =
"w-20-m w-25-l pl4-l"
const sectionImage =
"aspect-ratio aspect-ratio--8x5 shadow-hover pb0-m h-auto-m pb0-l h-auto-l mb4 ba b--black-10"
const introLink = 
"bb no-underline dim _add-link-"

const Portfolio = ({ data }) => (
  <React.Fragment>
    <Helmet bodyAttributes={{class: "_add-font-roboto _add-bg-dark-metallic-blue" }} />
    <div className="flex flex-column" style={{ scrollBehavior: "smooth", overflowY: "scroll" }}>

      <div className="flex justify-center mb5">
        <div id="hi-i'm-tim" className="moon-gray mb3 _add-intro-width mh2 mh4-m mh5-l">
          <h1 className="_add-heading fw5 mb0 mt5-l lh-solid">
            Hi I&#8217;m Tim&mdash;
          </h1>
          <h2 className="_add-subheading fw5 mt3 mb0 lh-solid">
            I deliver UI/UX projects, solutions and strategy
          </h2>
          <h3 className="_add-bigcopy fw3 mt4 lh-title w-90-l">
            Recent clients and projects include <Link to="#recordstore" className={`${introLink}recordstore`}>Recordstore</Link>, <Link to="#bbmp" className={`${introLink}bbmp`}>Brentwood Benson</Link>, <Link to="#umg" className={`${introLink}umg`}>Universal Music Group</Link>, <Link to="#beatles" className={`${introLink}beatles`}>The Beatles</Link>, <Link to="#worship" className={`${introLink}worship`}>Worship Charts</Link> and <Link to="#massive" className={`${introLink}massive`}>Massive Attack</Link>
          </h3>    
        </div>          
      </div>

      <div className={`${sectionContainerWrapper}recordstore z-5`}>
        <div id="recordstore" className={sectionContainer}>
          <h3 className={`${sectionHeading}recordstore`}>
            Recordstore
          </h3>
          <div className={sectionContent}>
            <p className={`${sectionParagraph}recordstore`}>
              UI/UX Design for the UKs top online independent music retailer. Worked with e-commerce team to map, understand and improve user journeys, site structure and use of product data.
            </p>
            <div className={sectionImageContainer}>
              <div className={sectionImageDesktop}>
                <Link to="./recordstore-desktop-home">
                  <Img
                    fluid={data.recordstoreDesktopHome.childImageSharp.fluid}
                    title={`Recordstore`}
                    className={sectionImage}
                  />
                </Link>                
                <Link to="./recordstore-desktop-product">
                  <Img
                    fluid={data.recordstoreDesktopProduct.childImageSharp.fluid}
                    title={`Recordstore`}
                    className={sectionImage}
                  />
                </Link>
              </div>
              <div className={sectionImageMobile}>
                <Link to="./recordstore-mobile-product">
                  <Img
                    fluid={data.recordstoreMobileProduct.childImageSharp.fluid}
                    title={`Recordstore`}
                    className={sectionImage}
                  />
                </Link>
              </div>
              <div className={sectionImageMobile}>
                <Link to="./recordstore-mobile-basket">
                  <Img
                    fluid={data.recordstoreMobileBasket.childImageSharp.fluid}
                    title={`Recordstore`}
                    className={sectionImage}
                  />
                </Link>
                <Link to="./recordstore-mobile-navigation">
                  <Img
                    fluid={data.recordstoreMobileNavigation.childImageSharp.fluid}
                    title={`Recordstore`}
                    className={sectionImage}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${sectionContainerWrapper}bbmp z-4`}>
        <div id="bbmp" className={sectionContainer}>
          <h3 className={`${sectionHeading}bbmp`}>
            Brentwood Benson Music Publishing
          </h3>
          <div className={sectionContent}>
            <p className={`${sectionParagraph}bbmp`}>
              UI/UX Design for a leading publisher of music resources for church choirs, kids ministry and worship. Project included extending upon existing white label platform functionality&mdash;mapping out of complex checkout user journey workflows allowing for tax exemptions for churches and non standard payment methods, user licensing of digital products, subscription products, video and audio content and more.
            </p>
            <div className={sectionImageContainer}>
              <div className={sectionImageDesktop}>
                <Link to="./bbmp-desktop-home">
                  <Img
                    fluid={data.bbmpDesktopHome.childImageSharp.fluid}
                    title={`Brentwood Benson Music Publishing`}
                    className={sectionImage}
                  />
                </Link>
              </div>  
              <div className={sectionImageTablet}>
                <Link to="./bbmp-tablet-xmas">
                  <Img
                    fluid={data.bbmpTabletXmas.childImageSharp.fluid}
                    title={`Brentwood Benson Music Publishing`}
                    className={sectionImage}
                  />
                </Link>
              </div>              
            </div>
          </div>
        </div>
      </div>

      <div className={`${sectionContainerWrapper}umg z-3`}>
        <div id="umg" className={sectionContainer}>
          <h3 className={`${sectionHeading}umg`}>
            Universal Music Group
          </h3>
          <div className={sectionContent}>
            <p className={`${sectionParagraph}umg`}>
              UI/UX Design concepts for guest checkout process for Universal Music Group global white label e-commerce platform.
            </p>
            <div className={sectionImageContainerLeft}>
              <div className={sectionImageMobileAll}>
                <Link to="./universal-mobile-basket">
                  <Img
                    fluid={data.umgMobileBasket.childImageSharp.fluid}
                    title={`Universal Music`}
                    className={sectionImage}
                  />
                </Link>
              </div>
              <div className={sectionImageMobileAll}>
                <Link to="./universal-mobile-login">
                  <Img
                    fluid={data.umgMobileLogin.childImageSharp.fluid}
                    title={`Universal Music`}
                    className={sectionImage}
                  />
                </Link>
              </div>
              <div className={sectionImageMobileAll}>
                <Link to="./universal-mobile-payment">
                  <Img
                    fluid={data.umgMobilePayment.childImageSharp.fluid}
                    title={`Universal Music`}
                    className={sectionImage}
                  />
                </Link>
              </div>
              <div className={sectionImageMobileAll}>
                <Link to="./universal-mobile-confirmation">
                  <Img
                    fluid={data.umgMobileConfirmation.childImageSharp.fluid}
                    title={`Universal Music`}
                    className={sectionImage}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${sectionContainerWrapper}beatles z-2`}>
        <div id="beatles" className={sectionContainer}>
          <h3 className={`${sectionHeading}beatles`}>
            The Beatles
          </h3>
          <div className={sectionContent}>
            <p className={`${sectionParagraph}beatles`}>
              UI/UX Design. Worked with Apple Records to design and deliver UK/EU e-commerce store based on The Beatles website style guide and digital assets. Provided direction and input for US and Japanese store iterations.
            </p>
            <div className={sectionImageContainer}>
              <div className={sectionImageDesktop}>
                <Link to="./beatles-desktop-home">
                  <Img
                    fluid={data.beatlesDesktopHome.childImageSharp.fluid}
                    title={`The Beatles`}
                    className={sectionImage}
                  />
                </Link>                
              </div>
              <div className={sectionImageMobile}>
                <Link to="./beatles-mobile-home">
                  <Img
                    fluid={data.beatlesMobileHome.childImageSharp.fluid}
                    title={`The Beatles`}
                    className={sectionImage}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${sectionContainerWrapper}worship z-1`}>
        <div id="worship" className={sectionContainer}>
          <h3 className={`${sectionHeading}worship`}>
            Worship Charts
          </h3>
          <div className={sectionContent}>
            <p className={`${sectionParagraph}worship`}>
              UI/UX Design for Worship Charts&mdash;chord charts, sheet music, PVGs, and music resources from today's leading worship artists.
            </p>
            <div className={sectionImageContainer}>
              <div className={sectionImageDesktop}>
                <Link to="./worship-desktop-home">
                  <Img
                    fluid={data.worshipDesktopHome.childImageSharp.fluid}
                    title={`Worship Charts`}
                    className={sectionImage}
                  />
                </Link>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div className={`${sectionContainerWrapper}massive z-0`}>
        <div id="massive" className={sectionContainer}>
          <h3 className={`${sectionHeading}massive`}>
            Massive Attack
          </h3>
          <div className={sectionContent}>
            <p className={`${sectionParagraph}massive`}>
              UI/UX Design for Massive Attack Blue Lines remastered release.
            </p>
            <div className={sectionImageContainer}>
              <div className={sectionImageDesktop}>
                <Link to="./massive-attack-desktop-home">
                  <Img
                    fluid={data.massiveDesktopHome.childImageSharp.fluid}
                    title={`Massive Attack`}
                    className={sectionImage}
                  />
                </Link>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div className="light-silver mb4 mt5 flex justify-center ">
        <p className="ph2">
          &copy; Tim Gilpin and respective copyright holders.
        </p>
      </div>
    </div>
  </React.Fragment>  
)
  
export default Portfolio

// BBMP
// UI/UX Design for a leading publisher of music resources for church choirs, kids ministry and worship. Project included extending upon existing white label platform functionality&mdash;mapping out of complex checkout user journey workflows allowing for tax exemptions for churches and non standard payment methods, user licensing of digital products, subscription products, video and audio content and more.
//
// Universal Music Group
// UI/UX Design concepts for guest checkout process for Universal Music Group global white label e-commerce platform.
//
// The Beatles
//  UI/UX Design. Worked with Apple Records to design and deliver UK/EU e-commerce store based on The Beatles website style guide and digital assets. Provided direction and input for US and Japanese store iterations.
//
// Worship Charts
//  UI/UX Design for Worship Charts&mdash;chord charts, sheet music, PVGs, and music resources from today's leading worship artists.
//
//  Massive Attack
//  UI/UX Design for Massive Attack Blue Lines remastered release. 


// <Img fluid={data.file.childImageSharp.fluid} title={`Photo`}/>

export const query = graphql`
  query {
    recordstoreDesktopHome: file(relativePath: { regex: "/recordstore-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recordstoreDesktopProduct: file(relativePath: { regex: "/recordstore-desktop-product/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recordstoreMobileProduct: file(relativePath: { regex: "/recordstore-mobile-product-2x/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recordstoreMobileBasket: file(relativePath: { regex: "/recordstore-mobile-basket/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recordstoreMobileNavigation: file(relativePath: { regex: "/recordstore-mobile-navigation/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    umgMobileBasket: file(relativePath: { regex: "/umg-mobile-basket/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    umgMobileLogin: file(relativePath: { regex: "/umg-mobile-login/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    umgMobilePayment: file(relativePath: { regex: "/umg-mobile-payment/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    umgMobileConfirmation: file(relativePath: { regex: "/umg-mobile-confirmation-page.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bbmpDesktopHome: file(relativePath: { regex: "/bbmp-desktop-no-carousel.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bbmpTabletXmas: file(relativePath: { regex: "/bbmp-tablet-xmas-search/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beatlesDesktopHome: file(relativePath: { regex: "/beatles-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beatlesMobileHome: file(relativePath: { regex: "/beatles-mobile-home/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    worshipDesktopHome: file(relativePath: { regex: "/worship-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    massiveDesktopHome: file(relativePath: { regex: "/massive-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
