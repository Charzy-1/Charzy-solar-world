import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {bigShoe1, bigShoe2, bigShoe3, customer1, customer2, Panel, Panelimage, Panelimage1, InverterImage, HybridInverter, BlueCarbon, Battery, Battery1, LithiumBa3, SolarLight, SolarLight1, SolarLight2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: Panel,
        name: "400 Watt Solar Panel Black Mono",
        description: "Experience high efficiency and sleek aesthetics with our 400 Watt Black Mono Solar Panel, now on sale! Perfect for residential and commercial installations, this panel offers powerful energy output in a compact design. Take advantage of this limited-time offer to save on a premium solution for sustainable energy."
    },
    {
        imgURL: Panelimage,
        name: "Exulted 300watts Mono Solar Panel",
        description: "The Exulted 300 Watt Mono Solar Panel combines reliability with advanced monocrystalline technology for optimal performance. Ideal for a range of installations, this panel delivers excellent power output, even in low-light conditions. Trust Exulted for energy efficiency you can rely on."
    },
    {
        imgURL: Panelimage1,
        name: "EXULTED 350watts Mono Solar Panel",
        description: "Power up with the Exulted 350 Watt Mono Solar Panel, designed for high efficiency and long-lasting durability. This panel is engineered to maximize energy production, making it an ideal choice for anyone seeking reliable and sustainable power."
    },
    {
        imgURL: InverterImage,
        name: "5000VA/48v Exulted Inverter with In-Built PWM",
        description: "Power up with the robust 5000VA Exulted Inverter, featuring a reliable 48V system and efficient in-built PWM technology for optimal energy management and seamless backup."
    },
    {
        imgURL: HybridInverter,
        name: "Exulted 3KVA/24V Hybrid Inverter (In-Built MPPT Controller)",
        description: "The Exulted 3KVA Hybrid Inverter combines high-performance 24V power with a built-in MPPT controller, maximizing solar efficiency and ensuring dependable energy supply for all needs"
    },
    {
        imgURL: BlueCarbon,
        name: "3KVA Hybrid Blue Carbon Inverter",
        description: "Experience next-gen energy with the 3KVA Hybrid Blue Carbon Inverter, designed for sustainable power solutions with advanced hybrid technology and long-lasting performance."
    },
    {
        imgURL: Battery,
        name: "Exulted 220AH/12V Tubular Battery",
        description: "Reliable and robust, the Exulted 220AH/12V tubular battery delivers enduring power, perfect for high-demand applications with exceptional lifespan and deep discharge capability."
    },
    {
        imgURL: Battery1,
        name: "De-Bull 220AH/12V Tubular Battery",
        description: "Built for durability, the De-Bull 220AH/12V tubular battery ensures consistent, powerful performance, ideal for homes and businesses needing long-lasting energy storage."
    },
    {
        imgURL: LithiumBa3,
        name: "Exulted 15KWH/48v Lithium (LiFeP04) Slim Battery",
        description: "Compact yet powerful, the Exulted 15KWH/48V LiFePO4 battery offers high-capacity storage, superior efficiency, and a slim profile—perfect for modern energy solutions and maximum space savings."
    },
    {
        imgURL: SolarLight,
        name: "Exulted-Blue Carbon 60W All in one Solar Streetlights"
    },
    {
        imgURL: SolarLight1,
        name: "100W Blue Carbon Streetlight | Solar Powered"
    },
    {
        imgURL: SolarLight2,
        name: "Exulted-Blue Carbon 100W All in one Solar Streetlight"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast Delivery",
        subtext: "Get your solar products delivered quickly and efficiently to your doorstep."
    },
    {
        imgURL: shieldTick,
        label: "Reliable Warranty",
        subtext: "Enjoy peace of mind with our extended warranty on all solar products."
    },
    {
        imgURL: support,
        label: "Customer Support",
        subtext: "Our team is here to provide expert guidance and support whenever you need it."
    },    
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Gabriel Okoh',
        rating: 4.5,
        feedback: "The quality and efficiency of the solar system exceeded my expectations. The attention to detail in the installation was top-notch. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Vera Okotie',
        rating: 4.5,
        feedback: "The solar panels not only met but far surpassed my expectations. I’m extremely satisfied with the performance, and I’ll definitely be coming back for more!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Tubular Batteries", link: "#products" },
            { name: "Lithium batteries", link: "#products" },
            { name: "Inverter Hybrid PWM", link: "#products" },
            { name: "Inverter Hybrid MPPT", link: "#products" },
            { name: "Solar Panels", link: "#products" },
            { name: "Solar Pumps", link: "#products" },
            { name: "Charge controllers", link: "#products" },
            { name: "AVR Stabilizers", link: "products" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#about-us" },
            { name: "FAQs", link: "/" }
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "chazylites@gmail.com", link: "mailto:chazylites@gmail.com" },
            { name: "+2348082921633", link: "tel:+2348082921633" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: instagram, alt: "instagram logo" },
];