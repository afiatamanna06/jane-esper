import SocialMediaIcons from "../common/SocialMediaIcons"

function Footer() {
  return (
    <footer className="bg-red pt-8 pb-16">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-xl text-yellow">JANE ESPER</p>
                <p className="font-playfair text-md text-yellow mt-2 md:mt-0">©2022 ESPER. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer