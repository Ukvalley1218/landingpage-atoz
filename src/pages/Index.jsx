import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Mail, Minus, Plus, Star, Twitter, Youtube } from 'lucide-react';
// import { MdMenuBook } from "react-icons/md";
import { useLocation } from 'react-router-dom';

function Index() {
    const [isProcessing, setIsProcessing] = useState(false);
    const location = useLocation();
  const params = new URLSearchParams(location.search);
  // 📌 GET VALUES
const reference = params.get("reference") || "direct";
const utm_source = params.get("utm_source") || sessionStorage.getItem("utm_source") || null;
const utm_medium = params.get("utm_medium") || sessionStorage.getItem("utm_medium") || null;
const utm_campaign = params.get("utm_campaign") || sessionStorage.getItem("utm_campaign") || null;
const utm_content = params.get("utm_content") || sessionStorage.getItem("utm_content") || null;

// 📌 STORE IN SESSION
sessionStorage.setItem("reference", reference);
if (utm_source) sessionStorage.setItem("utm_source", utm_source);
if (utm_medium) sessionStorage.setItem("utm_medium", utm_medium);
if (utm_campaign) sessionStorage.setItem("utm_campaign", utm_campaign);
if (utm_content) sessionStorage.setItem("utm_content", utm_content);

// use ref value
const ref = sessionStorage.getItem("reference") || "direct";

  // optional: store for later use
  sessionStorage.setItem("reference", reference);

    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("$");
    const [price, setPrice] = useState(4.99);
    const [actualPrice, setactualPrice] = useState(9.99)

    const [timeLeft, setTimeLeft] = useState({
        hours: 7,
        minutes: 30,
        seconds: 23,
    });

    // 🧭 Detect location
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                if (data.country_code === "IN") {
                    setCurrency("INR");
                    setSymbol("₹");
                    setPrice(99); // e.g. ₹999
                    setactualPrice(199)
                } else if (data.country_code === "AE") {
                    setCurrency("AED");
                    setSymbol("د.إ");
                    setPrice(9); // e.g. AED 41.34
                    setactualPrice(19)
                } else {
                    setCurrency("USD");
                    setSymbol("$");
                    setPrice(4.99);
                    setactualPrice(9.99);
                }
            })
            .catch(() => {
                // fallback to USD if API fails
                setCurrency("USD");
                setSymbol("$");
                setPrice(4.99);
                setactualPrice(9.99);
            });

        // Countdown timer
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // quick links
    const links = [
        {
            id: 1,
            link: "About the Book",
            src: "#about-book"
        },
        {
            id: 2,
            link: "About the Author",
            src: "#about-author"
        },
        {
            id: 3,
            link: "Reader Reviews",
            src: "#reader-reviews"
        },
        {
            id: 4,
            link: "FAQs",
            src: "#faqs"
        },


    ]

    const images = [
        "/books/atoz/images/imgthree.webp",
        "/books/atoz/images/image4.webp",
        "/books/atoz/images/image8.webp",
        "/books/atoz/images/imgone.webp",
        "/books/atoz/images/images11.webp",

    ];
    const images2 = [
        "/books/atoz/images/image7.webp",
        "/books/atoz/images/images11.webp",
        "/books/atoz/images/image5.webp",
        "/books/atoz/images/imgtwo.webp",
        "/books/atoz/images/image7.webp",

    ];
    const audienceGroups = [
        {
            title: "Indian Investors",
            description: "Looking for safe, high-return opportunities abroad? Learn how to navigate Dubai's laws, avoid risks, and build a profitable portfolio."
        },
        {
            title: "Real Estate Professionals",
            description: "Whether you're an agent, consultant, or aspiring entrepreneur, discover strategies to scale your career, work with international clients, and stand out in the market."
        },
        {
            title: "first time Buyers",
            description: "If you've never purchased property before, this book guides you through every step — from choosing the right area to handling paperwork and financing."
        },
        {
            title: "NRIs & Global Buyers",
            description: "For Indians living abroad and global buyers, the book offers insights into ownership rights, legal processes, and building wealth through Dubai property."
        }
    ];
    const topFeatures = [
        {
            title: "A Complete 4-In-1 Guide",
            description: "All real estate basics and pro strategies in one book."
        },
        {
            title: "Dubai Made Simple",
            description: "Learn freehold vs leasehold, find the hottest areas, and master ownership rules."
        },
        {
            title: "Step-By-Step Roadmaps",
            description: "Clear, actionable guides for buying, financing, and investing without confusion."
        }
    ];

    const bottomFeatures = [
        {
            title: "Built For Global Investors",
            description: "Insider tips for NRIs and international buyers eyeing Dubai's booming market."
        },
        {
            title: "Real Stories, Real Lessons",
            description: "Practical examples and case studies that connect theory with reality."
        },
        {
            title: "Wisdom You Can Trust",
            description: "Authored by Mamata Dhiraj Jain, a leader, mentor, and real estate expert."
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [{
        id: 1,
        text: `"This book gave me the roadmap I needed to start investing in Dubai. It's clear, practical, and full of actionable strategies for building wealth in this dynamic market. The detailed advice on financing and tax benefits was invaluable for structuring my investments. I now feel prepared to scale my portfolio confidently."`,
        name: "Vikram Rathod",
        title: "Business Entrepreneur",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
        rating: 5

    }, { id: 2, text: `"I found The A to Z of Dubai Real Estate very informative and easy to understand. The author covers a wide range of topics, including buying off plan properties and understanding the different types of real estate. The book made it easy for me to see the investment potential in Dubai's market."`, name: "Priya Sharma", title: "Property Consultant", image: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440", rating: 5 }, { id: 3, text: `"An essential guide for anyone looking to invest in Dubai real estate. The insights on market trends and legal requirements saved me from potential pitfalls. Highly recommended for both beginners and experienced investors."`, name: "Ahmed Al-Mansouri", title: "Real Estate Investor", image: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440", rating: 5 }];


    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const visibleTestimonials = () => {
        const next = (currentIndex + 1) % testimonials.length;
        return [testimonials[currentIndex], testimonials[next]];
    };

    // Define the data structure for all testimonials
    const testimonialsData = [
        {
            id: 1,
            text: `"As a first time investor in Dubai, I was looking for a resource that could offer more than just facts and figures. The A to Z of Dubai Real Estate transformed my approach to the market. Mamata Jain’s ability to break down complex topics and present them with real-world examples has been invaluable. This book doesn’t just talk about investments; it empowers you with the mindset needed to succeed. It’s a must-have for anyone serious about the Dubai real estate market."`,
            name: 'Rakesh Mehta',
            title: 'Real Estate Investor, UAE',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Rajesh S',
        },
        {
            id: 2,
            text: `"I’ve been running a business in Dubai for years, but I never truly understood the intricacies of the real estate market until I read this book. Mamata Dhiraj Jain has an incredible way of making tough concepts seem simple and accessible. The actionable insights and step-by-step strategies she provides helped me navigate the competitive Dubai property scene and make informed decisions. This book is more than just a guide; it’s a real game-changer for business owners in Dubai."`,
            name: 'Sara Al Mansouri',
            title: 'Business Owner, Dubai',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Priya K.',
        },
        {
            id: 3,
            text: `"As an international investor, I needed something that would help me understand the dynamics of the Dubai property market. This book does exactly that. Mamata Jain bridges the gap between theoretical knowledge and practical execution. The clear explanations, paired with real-life case studies, made this an invaluable resource. Whether you're a seasoned investor or new to the Dubai market, The A to Z of Dubai Real Estate offers the insights you need to make confident investment decisions."`,
            name: 'Jonathan Reed',
            title: 'Global Investor, London',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Ravi Kumar',
        },
        {
            id: 4,
            text: `"Reading The A to Z of Dubai Real Estate felt like having Mamata Jain as a mentor by my side throughout the journey. Each chapter not only provided in-depth knowledge but also offered personal insights from Mamata Jain’s years of experience in the industry. Her advice is pragmatic, grounded in real-world applications, and incredibly valuable for anyone looking to make smart property decisions in Dubai. This book is more than just a read; it’s a powerful tool for those serious about success in real estate."`,
            name: 'Priya Khanna',
            title: 'Reader Review, South Dubai',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Radhika M',
        },
        {
            id: 5,
            text: `"The A to Z of Dubai Real Estate is more than just a book; it’s a blueprint for understanding the complex landscape of real estate in the UAE. Mamata Jain has meticulously covered everything from policies and regulations to investment strategies. What I love most is how this book merges theory with practical advice, making it the perfect guide for both investors and professionals in the industry. A must-read for anyone navigating the real estate sector in the UAE."`,
            name: 'Omar Rahman',
            title: 'Industry Expert, South Dubai',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Aishwarya Patel',
        },
        {
            id: 6,
            text: `"Having spent over two decades in real estate, I’ve seen a lot of market trends and investment advice. But The A to Z of Dubai Real Estate stands out as a top resource for understanding the UAE’s property market. mamata Jain offers real-world strategies that are not only practical but also based on a deep understanding of the market. She brings clarity to the complexities of the Dubai property market, making it an invaluable tool for any serious investor."`,
            name: 'Khalid Hussain',
            title: 'Property Developer, Dubai',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Aishwarya Patel',
        },
        {
            id: 7,
            text: `"As a real estate consultant, I recommend The A to Z of Dubai Real Estate to every client who wants to get ahead in Dubai's property market. Mamata Jain provides a thorough understanding of the market’s evolution, current trends, and future predictions. Her insights are sharp and relevant, offering valuable strategies for both new and seasoned investors. This book doesn’t just explain the market; it equips you to succeed in it."`,
            name: ' Nadia Sheikh',
            title: 'Real Estate Consultant, UAE',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Aishwarya Patel',
        },
        {
            id: 8,
            text: `"Coming from a completely different market, I was unsure how to approach Dubai’s real estate opportunities. The A to Z of Dubai Real Estate has been a game changer. Mamata Jain breaks down the cultural, financial, and legal aspects of investing in Dubai, making it easy for international investors like me to understand and act. The book is both informative and actionable a must read for anyone who wants to build wealth through Dubai’s booming real estate market."`,
            name: 'Aaron Lim',
            title: 'Investor, Singapore',
            imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/cec11eecdd3e08f07ccbbc687b637356574c0fa8?width=440",
            imageAlt: 'Aishwarya Patel',
        },
    ];
    // Reusable SVG for the quote icon
    const QuoteIcon = () => (
        <svg
            className="absolute left-6 top-3 w-16 h-16 lg:w-[82px] lg:h-[82px] opacity-30"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.6586 59.18C12.1394 55.4422 10.25 51.2499 10.25 44.4542C10.25 32.4958 18.6447 21.7778 30.8525 16.4785L33.9036 21.1867C22.509 27.3503 20.2813 35.3488 19.393 40.3918C21.2278 39.4419 23.6297 39.1105 25.9838 39.3292C32.1474 39.8998 37.0059 44.9598 37.0059 51.2499C37.0059 54.4215 35.746 57.4631 33.5034 59.7058C31.2608 61.9484 28.2191 63.2083 25.0476 63.2083C23.2936 63.1931 21.5602 62.8292 19.9483 62.1376C18.3364 61.446 16.8782 60.4406 15.6586 59.18ZM49.8253 59.18C46.3061 55.4422 44.4167 51.2499 44.4167 44.4542C44.4167 32.4958 52.8114 21.7778 65.0192 16.4785L68.0703 21.1867C56.6757 27.3503 54.448 35.3488 53.5597 40.3918C55.3944 39.4419 57.7963 39.1105 60.1504 39.3292C66.3141 39.8998 71.1726 44.9598 71.1726 51.2499C71.1726 54.4215 69.9127 57.4631 67.6701 59.7058C65.4274 61.9484 62.3858 63.2083 59.2142 63.2083C57.4603 63.1931 55.7269 62.8292 54.115 62.1376C52.5031 61.446 51.0448 60.4406 49.8253 59.18Z" fill="#123050" />
        </svg>
    );

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Who should read this book?",
            answer: "Anyone curious about Dubai real estate, including first-time buyers, investors, NRIs, aspiring realtors, and professionals looking to expand globally."
        },
        {
            question: "Do I need prior knowledge of real estate to understand the book?",
            answer: "Not at all! The book is written in simple, beginner-friendly language while also offering advanced strategies for experts."
        },
        {
            question: "How is this book different from other real estate guides?",
            answer: "Unlike generic real estate books, this guide focuses solely on Dubai, one of the world's fastest-growing property markets, and offers practical, step-by-step insights."
        },
        {
            question: "Will this book help me if I'm not living in Dubai?",
            answer: "Yes! Many global investors, especially NRIs, invest in Dubai without living there. The book explains exactly how you can do this too."
        },
        {
            question: "Can this book help me build a career in real estate?",
            answer: "Absolutely, Beyond buying and investing, the book covers property management, legalities, and even branding yourself as a professional."
        },
        {
            question: "What format is the book available in?",
            answer: "Both print and digital versions (depending on availability) so you can choose what works best for you."
        },
        {
            question: "Why should I trust this author?",
            answer: "Mamata Dhiraj Jain is a visionary leader in Dubai’s real estate market, known for her sustainable, tech-driven projects. As the Managing Director of 1XL, she has earned recognition for her expertise and innovation. A TEDx speaker, she has received prestigious awards such as the Iconic Power Couple of the UAE and the ET Indo Global Leader Award 2025. With a PhD in FDI and Property Markets, she blends academic excellence with real-world impact."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const secrets = [
        {
            number: 1,
            title: "Unlock the Market Secrets",
            description: "Learn insider knowledge about Dubai's property market from freehold vs leasehold to the most lucrative neighbourhoods."
        },
        {
            number: 2,
            title: "Build a Real Estate Career",
            description: "Learn how to scale as a professional working with clients, branding yourself, and using tech to grow your business."
        },
        {
            number: 3,
            title: "Step-By-Step Guidance",
            description: "Navigate the buying process with confidence, even if it's your first property purchase."
        },
        {
            number: 4,
            title: "Master Property Management",
            description: "Get tips on maintaining, renting, and selling your property for optimal income."
        },
        {
            number: 5,
            title: "Stay Legally Safe",
            description: "Understand Dubai's property laws and regulations, ensuring you avoid costly mistakes."
        },
        {
            number: 6,
            title: "Invest Smarter, Not Harder",
            description: "Discover proven strategies to invest in properties that maximise returns and minimise risks."
        }
    ];
    return (
        <>
        {/* React 19 automatically moves these into <head> */}
      



    {/* code */}

        <div className='overflow-x-hidden'>
            {/* Hero Section */}
            <section className="w-full bg-white lg:min-h-screen flex flex-col">

                {/* Top Navbar */}
                <div className="flex justify-between items-center px-6 sm:px-10 md:px-20 py-3 bg-[#FFFFFF] rounded shadow-lg">
                    <a href="/books/atoz/" className='cursor-pointer'><img loading="lazy" src="/books/atoz/images/logo.webp" alt="Logo" className="h-4 sm:h-6" /></a>
                    <button
                        onClick={() => {window.location.href = `/books/atoz/checkout?type=ebook&reference=${ref}`;}}
                        className="cursor-pointer bg-gradient-to-b from-[#123050] to-[#1B497A] text-white 
             px-6 sm:px-10 md:px-12 py-2 rounded-lg transition-all duration-300 ease-in-out 
             text-sm sm:text-[22px] font-medium shadow-md
             hover:from-[#1B497A] hover:to-[#123050] hover:shadow-lg hover:scale-105"
                    >
                        Order Now
                    </button>

                </div>
                {/* Hero Section */}
                <div className="w-full bg-[url('/books/atoz/images/backg.webp')] bg-cover bg-center overflow-hidden">
                    <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20 gap-10 md:py-20">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-full text-center md:text-left space-y-5 md:space-y-6"
                        >
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
                                style={{
                                    fontFamily: 'Coustard, serif',
                                    color: '#123050',
                                }}
                            >
                                The A to Z of Dubai<br className="hidden sm:block" /> Real Estate (Book)
                            </h1>

                            <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                Your Complete Guide to Investing, Buying, and Succeeding in Dubai's Booming Property Market.

                            </p>

                            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                                <button
                                    onClick={() => {window.location.href = `/books/atoz/checkout?type=hardcopy&reference=${ref}`}}
                                    className="cursor-pointer bg-gradient-to-b from-[#123050] to-[#1B497A] text-white text-sm sm:text-base md:text-lg font-semibold 
               px-6 sm:px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 
               hover:scale-105 transition-transform shadow-lg"
                                >
                                    <span className="heartbeat">📘 Get Your Copy Now</span>
                                </button>

                                {/* <button
                                    onClick={() => (window.location.href = '/books/atoz/checkout?type=ebook')}
                                    className="cursor-pointer border border-[123050] text-black text-sm sm:text-base md:text-lg font-semibold 
               px-6 sm:px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 
               hover:scale-105 transition-transform shadow-lg"
                                >
                                    <span className="heartbeat">📥 Get Your Ebook Now</span>
                                </button> */}
                            </div>

                            <p className="text-[#374151] text-xs sm:text-sm md:text-base pt-2">
                               Available In Hard Cover & Digital E-Book.

                            </p>

                            {/* Stats */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 lg:pb-0 pb-8 justify-center md:justify-start">
                                {[
                                    { value: "10k+", label: "Copies Sold" },
                                    { value: "4.9/5", label: "Reviews on Book" },
                                    { value: "1000+", label: "Pre-Orders" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/80 backdrop-blur-sm w-full sm:w-[180px] md:w-[120px] lg:w-[150px] px-5 py-4 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center justify-center"
                                    >
                                        <p className="font-bold text-lg sm:text-xl md:text-xl text-[#0D2B4E]">{item.value}</p>
                                        <p className="text-xs sm:text-xs text-[#4B5563]">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                        </motion.div>

                        {/* Right Content - Book Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative w-full md:w-1/2 flex justify-center md:justify-end md:mt-0"
                        >
                            <div className="relative">
                                <img loading="lazy"
                                    src="/books/atoz/images/heronew.webp"
                                    alt="Dubai Real Estate Book"
                                    className="w-[300px] sm:w-[280px] md:w-[350px] lg:w-[500px] xl:w-[825px] xl:h-[470px] drop-shadow-2xl z-10"
                                />

                                {/* Floating Images - positioned closer to hero image, responsive for all devices */}
                                <img loading="lazy"
                                    src="/books/atoz/images/tr.webp"
                                    alt=""
                                    className="absolute top-[10px] sm:top-[-10px] md:top-[-12px] lg:top-[-18px] right-[-1px] sm:right-[-15px] md:right-[-20px] lg:right-[-38px] w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] xl:w-[191px] rotate-3 z-20"
                                />
                                <img loading="lazy"
                                    src="/books/atoz/images/bl.webp"
                                    alt=""
                                    className="absolute bottom-[5px] sm:bottom-[10px] md:bottom-[15px] lg:bottom-[29px] left-[-15px] sm:left-[-18px] md:left-[-25px] xl:left-[-47px] lg:left-[-25px] w-[60px] sm:w-[70px] md:w-[80px] lg:w-[110px] xl:w-[191px] -rotate-2 z-20"
                                />
                                <img loading="lazy"
                                    src="/books/atoz/images/br.webp"
                                    alt=""
                                    className="absolute bottom-[8px] sm:bottom-[12px] md:bottom-[15px] lg:bottom-[20px] right-[-10px] sm:right-[-15px] md:right-[-22px] lg:right-[-20px] xl:right-[-40px] w-[60px] sm:w-[70px] md:w-[80px] lg:w-[110px] xl:w-[191px] rotate-6 z-20"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>



                {/* Brands Section */}
               
            </section>

            <div id='about-book' className=" grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-0 mt-0 md:mb-12 md:mt-12 lg:mb-0 lg:mt-0">
                {/* Left Section - Book Image with Decorative Background */}
                <div className="pt-12 md:pt-0 lg:pt-0 relative flex items-center justify-center md:justify-end lg:justify-start lg:pl-8">

                    <div className=" relative w-full max-w-[480px] md:max-w-[520px] lg:max-w-[597px] h-[320px] md:h-[500px] lg:h-[700px]">
                        {/* Yellow Curved Background */}
                        <div
                            className="absolute left-0 top-[50%] w-full h-[120px] md:h-[180px] lg:h-[252px] rounded-r-[40px] md:rounded-r-[45px] lg:rounded-r-[50px]"
                            style={{
                                background: 'linear-gradient(180deg, #FFE08A 0%, #FFD700 34.13%)',
                            }}
                        />

                        {/* Blue Curved Background */}
                        <div
                            className="absolute left-0 top-[56%] w-full h-[120px] md:h-[180px] lg:h-[247px] rounded-r-[40px] md:rounded-r-[45px] lg:rounded-r-[50px] bg-gradient-to-b from-[#123050] to-[#1B497A]"
                        />

                        {/* Book Cover Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute left-[8%] md:left-[10%] lg:left-[12%] top-[-55px] md:top-[-20px] lg:top-[-10px]"
                        >
                            <img loading="lazy"
                                src="/books/atoz/images/heronew.webp"
                                alt="The A to Z of Dubai Real Estate Book Cover"
                                className="w-[250px] sm:w-[320px] mt-10 md:w-[360px] md:mt-20 xl:w-[839px] lg:mt-24 xl:mt-8 h-auto object-contain"
                                style={{ transform: 'rotate(-3.849deg)' }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Right Section - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center space-y-5 md:space-y-6 lg:space-y-8 px-4 md:px-6 lg:pr-8"
                >
                    {/* Heading */}
                    <h2
                        className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] leading-tight md:leading-[45px] lg:leading-[60px] font-normal"
                        style={{
                            fontFamily: 'Coustard, serif',
                            color: '#123050',
                            fontWeight: 400,
                        }}
                    >
                        What Is <br />
                        <span className="font-black">
                            The A to Z of Dubai<br />Real Estate
                        </span>{" "}
                        Book All About?
                    </h2>

                    {/* Description */}
                    <p
                        className="text-sm text-justify sm:text-base md:text-[18px] lg:text-[22px] leading-relaxed md:leading-[28px] lg:leading-[32px]"
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            color: '#374151',
                            fontWeight: 400,
                        }}
                    >
                        It's your ultimate guide to navigating Dubai's dynamic property market.
                        Whether you're a first time buyer, investor or agent, it offers practical
                        insights on freehold and leasehold properties, top areas for investment,
                        and step-by-step buying strategies. With real life examples and expert
                        tips, this guide helps you manage risks, optimise returns, and secure
                        long-term growth. It also covers key regulations, financing options,
                        smart homes, sustainability, and future trends — making it the perfect
                        resource to unlock opportunities and succeed in Dubai's real estate
                        market.
                    </p>
                </motion.div>
            </div>



            {/* CTA Button */}
            <div className="flex justify-center items-center mt-12 md:mt-8">
                <button
                    onClick={() => {window.location.href = `/books/atoz/checkout?type=hardcopy&reference=${ref}`}}
                    className="cursor-pointer bg-[#BE1E2D] relative group overflow-hidden rounded-lg shadow-[2px_4px_10px_0_rgba(0,0,0,0.30)] transition-all duration-300"

                >
                    <div className="cursor-pointer flex items-center justify-center px-8 lg:px-[87px] py-6 lg:py-7 gap-4 group-hover:bg-gradient-to-b group-hover:from-[#123050] group-hover:to-[#1B497A] rounded-lg transition-all duration-300">
                        <span
                            className="heartbeat text-white text-center text-2xl sm:text-3xl lg:text-[35px] leading-7 font-bold"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            📥 Get Your Copy Now
                        </span>
                    </div>
                </button>
            </div>
            {/* Section 2: Meet The Visionary */}
            <section id='about-author' className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-12 sm:pt-14 lg:pt-20">
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6 lg:gap-20 items-center">
                        {/* Left Section - Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="flex flex-col space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                            {/* Heading */}
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-[50px] lg:leading-[60px] font-black"
                                style={{
                                    fontFamily: 'Coustard, serif',
                                    color: '#123050',
                                    fontWeight: 900,
                                }}
                            >
                                Meet the Visionary Behind <br className="hidden sm:block" />
                                the Book
                            </h2>

                            {/* Name */}
                            <h3
                                className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-8 font-bold underline mx-auto lg:mx-0"
                                style={{
                                    fontFamily: 'Roboto, sans-serif',
                                    color: '#123050',
                                    textDecorationThickness: '2px',
                                    textUnderlineOffset: '4px',
                                }}
                            >
                             Mamata Dhiraj Jain
                            </h3>

                            {/* Bio Description */}
                            <p
                                className="text-sm sm:text-base text-justify md:text-lg lg:text-[22px] leading-relaxed md:leading-[28px] lg:leading-[32px] px-1 sm:px-0"
                                style={{
                                    fontFamily: 'Roboto, sans-serif',
                                    color: '#374151',
                                    fontWeight: 400,
                                }}
                            >
                                She is a visionary author, businesswoman, speaker and philanthropist, recognised for her pioneering work in Dubai’s real estate market. As the Managing Director of <span className="font-nunito">1XL</span>, she leads sustainable, technology-driven projects. Her journey from humble beginnings to a prominent leader in the competitive Dubai market reflects her resilience, entrepreneurial spirit, and dedication to innovation. A TEDx Speaker, Mamata has been honoured with several prestigious awards, including the Iconic Power Couple of the UAE by India Today Group, the NewsX Shakti Award 2025, and the ET Indo Global Leader Award 2025.

                            </p>
                        </motion.div>

                        {/* Right Section - Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }} className="relative flex items-center justify-center lg:justify-center mt-10 md:mt-0 md:mb-2 lg:mt-0">
                            <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-full h-[340px] sm:h-[420px] md:h-[470px] lg:h-[557px]">
                                {/* Yellow Background with Image */}
                                <div className="absolute lg:left-[70px] top-0 w-full">
                                    <img loading="lazy"
                                        src="/books/atoz/images/v1.webp"
                                        alt="Mamata Jain Profile"
                                        className="w-full h-auto object-fit"
                                    />
                                </div>

                                {/* Arrow SVG (only visible on large screens) */}
                                <div className="absolute left-[-11%] bottom-[-80px] sm:bottom-[-100px] lg:bottom-[-115px] hidden lg:block">
                                    <svg
                                        width="206"
                                        height="206"
                                        viewBox="0 0 206 206"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.9">
                                            <path
                                                d="M48.4432 115.909L72.2089 158.655L114.955 134.889"
                                                stroke="#123050"
                                                strokeWidth="8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M72.2109 158.655L87.3951 105.446C97.8778 68.7113 136.152 47.4315 172.887 57.9142L179.538 59.8123"
                                                stroke="#123050"
                                                strokeWidth="8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Legacy Section */}
                    <div className="mt-14 sm:mt-16 lg:mt-24 relative">
                        <div
                            className="rounded-[20px] px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 relative overflow-hidden text-center"
                            style={{
                                background: 'linear-gradient(0deg, #123050 0%, #1B497A 100%)',
                            }}
                        >
                            {/* Heading */}
                            <h2
                                className="text-2xl sm:text-3xl md:text-3xl lg:text-[45px] leading-tight md:leading-[50px] lg:leading-[60px] font-normal text-center mb-6 sm:mb-8 lg:mb-12"
                                style={{
                                    fontFamily: 'Coustard, serif',
                                    background: 'linear-gradient(180deg, #FFE08A 0%, #FFD700 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Beyond the Book: A Legacy of Impact
                            </h2>

                            {/* Description */}
                            <div
                                className="text-sm sm:text-base md:text-lg lg:text-[22px] text-justify leading-relaxed md:leading-[28px] lg:leading-[32px] lg:text-center text-white max-w-[1073px] mx-auto px-2 sm:px-6"
                                style={{
                                    fontFamily: 'Roboto, sans-serif',
                                }}
                            >
                                <p>
                                    Mamata Dhiraj Jain has been recognised for her academic
                                    excellence and pioneering innovations in real estate. She earned her{' '}
                                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#FFE08A] to-[#FFD700]">
                                        PhD in 2025
                                    </span>{' '}
                                    for groundbreaking research on FDI and Dubai's Property Market
                                    Evolution, establishing her as a thought leader in the industry.{' '}
                                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#FFE08A] to-[#FFD700]">
                                        Through <span style={{fontFamily: 'Nonito'}}>1</span>XLInfra
                                    </span>
                                    , She has been awarded{' '}
                                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#FFE08A] to-[#FFD700]">
                                        2 patents and has 4 patents pending
                                    </span>{' '}
                                    for tech innovations and sustainable urban spaces, aiming to transform real estate with
                                    eco-friendly solutions that empower communities. Beyond business, her
                                    vision extends to the{' '}
                                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#FFE08A] to-[#FFD700]">
                                        Jainam Jivika Foundation (JJF)
                                    </span>
                                    , where she champions education, women empowerment, and social
                                    upliftment.
                                </p>
                                <p className="mt-4 font-bold text-base text-center sm:text-lg lg:text-[23px]">
                                    Follow her journey and insights on @MamataJain𝟏XL
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-11 mt-6 sm:mt-8 lg:mt-10">
                                <center className="flex flex-wrap justify-center gap-5 max-w-[200px] sm:max-w-none">
                                    <a
                                        href="https://www.instagram.com/drmamatajain1xl/"
                                        className="relative group w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="INSTAGRAM"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            INSTAGRAM
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="LINKEDIN"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            LINKEDIN
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.facebook.com/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="FACEBOOK"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            FACEBOOK
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@MamataJain1XL"
                                        className="relative group w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="YOUTUBE"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            YOUTUBE
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://x.com/MamataJain1XL"
                                        className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="X"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            X
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.threads.com/@MamataJain1XL"
                                        className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="THREADS"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            THREADS
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802c.756-1.081 1.753-1.502 3.132-1.502c.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137c0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994C1 2.034 4.482 0 8.044 0C9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79c0 4.143 2.254 6.343 5.63 6.343c2.777 0 4.847-1.443 4.847-3.556c0-1.438-1.208-2.127-1.27-2.127c-.236 1.234-.868 3.31-3.644 3.31c-1.618 0-3.013-1.118-3.013-2.582c0-2.09 1.984-2.847 3.55-2.847c.586 0 1.294.04 1.663.114c0-.637-.54-1.728-1.9-1.728c-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416c0 .878 1.043 1.168 1.6 1.168c1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"
                                            />
                                        </svg>
                                    </a>

                                    {/* <a
                                        href="https://www.quora.com/profile/MamataJain1XL"
                                        className="relative group w-8 h-8 bg-[#b92b27] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="Quora"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            Quora
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M20.94 17.46h-1.11c-.06.52-.4 1.17-1.25 1.17c-.78 0-1.34-.54-1.88-1.36a7.23 7.23 0 0 0 2.84-5.81C19.54 7 15.86 4 12.01 4C8.21 4 4.5 7.03 4.5 11.47c0 4.4 3.71 7.43 7.51 7.43c.66 0 1.32-.09 1.95-.26c.74 1.27 1.73 2.36 3.6 2.36c3.1 0 3.45-2.86 3.38-3.54m-5.45-2.18c-.73-1.11-1.66-1.98-3.46-1.98c-1.16 0-2.06.38-2.62.86l.46.92c.24-.11.49-.15.75-.15c1.35 0 2.04 1.17 2.63 2.33c-.38.11-.79.16-1.24.16c-2.85 0-4.08-2.01-4.08-5.95c0-3.96 1.23-5.99 4.08-5.99c2.89 0 4.13 2.03 4.13 5.99c-.01 1.58-.21 2.86-.65 3.81"
                                            />
                                        </svg>
                                    </a> */}

                                    <a
                                        href="https://www.pinterest.com/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-[#e60023] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="PINTEREST"
                                        target='blank'
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            PINTEREST
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Visual Showcase with Scrolling Marquee + CTA */}
            <section className="w-full bg-white py-12 md:py-14 lg:py-20 overflow-hidden">
                {/* Marquee 1 - Left to Right */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee-left">
                        {images.concat(images).map((src, i) => (
                            <div
                                key={i}
                                className="w-[447px] h-[280px] flex-shrink-0 mx-2 rounded-xl overflow-hidden shadow-md"
                            >
                                <img loading="lazy"
                                    src={src}
                                    alt={`marquee-${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spacing between rows */}
                <div className="h-8 lg:h-12"></div>

                {/* Marquee 2 - Right to Left */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee-right">
                        {images2.concat(images).map((src, i) => (
                            <div
                                key={i}
                                className="w-[447px] h-[280px] flex-shrink-0 mx-2 rounded-xl overflow-hidden shadow-md"
                            >
                                <img loading="lazy"
                                    src={src}
                                    alt={`marquee-${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center items-center mt-12 md:mt-14 lg:mt-20">
                    <button
                        onClick={() => {window.location.href = `/books/atoz/checkout?type=hardcopy&reference=${ref}`}}
                        className="cursor-pointer bg-[#BE1E2D] relative group overflow-hidden rounded-lg shadow-[2px_4px_10px_0_rgba(0,0,0,0.30)] transition-all duration-300"

                    >
                        <div className="flex cursor-pointer items-center justify-center px-8 lg:px-[87px] py-6 lg:py-7 gap-4 group-hover:bg-gradient-to-b group-hover:from-[#123050] group-hover:to-[#1B497A] rounded-lg transition-all duration-300">
                            <span
                                className="heartbeat text-white text-center text-2xl sm:text-3xl lg:text-[35px] leading-7 font-bold"
                                style={{ fontFamily: "Roboto, sans-serif" }}
                            >
                                📥 Get Your Copy Now
                            </span>
                        </div>
                    </button>
                </div>
            </section>

            {/* Section 3: Testimonials */}
            
            {/* what you learn section */}
            < section className="bg-white text-white py-12 md:py-14 lg:py-20 px-6" >
                <div className="max-w-6xl mx-auto bg-[#205389] rounded-lg shadow-lg p-8 md:p-12 relative">
                    {/* Title */}
                    <h2 style={{fontFamily: 'Coustard'}} className="text-center text-xl md:text-3xl mb-4">
                        What You Will Learn In
                    </h2>
                    <h3 style={{fontFamily: 'Coustard'}} className="text-center text-xl md:text-4xl font-black mb-4 md:mb-12 lg:mb-12">
                        The A to Z of Dubai Real Estate Book
                    </h3>

                    {/* Main Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left side (Points 1–3) */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-yellow-400 font-bold text-lg">
                                    1. Foundations Made Simple
                                </h4>
                                <p className="text-gray-200 text-base text-justify">
                                    Dubai’s property market can feel complex, but this book breaks it
                                    down into simple, clear steps. You’ll begin by understanding the
                                    basics of freehold and leasehold ownership, and explore the most
                                    popular areas like Downtown Dubai and Palm Jumeirah.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-yellow-400 font-bold text-lg">
                                    2. Your First Property Purchase
                                </h4>
                                <p className="text-gray-200 text-base text-justify">
                                    Discover how to confidently buy your first property. From starting
                                    your search to securing financing and handling legal requirements,
                                    every step is explained in a way that’s easy to follow.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-yellow-400 font-bold text-lg">
                                    3. Smart Investment Strategies
                                </h4>
                                <p className="text-gray-200 text-base text-justify">
                                    Learn the risks and rewards of investing, including off plan
                                    properties. You’ll uncover proven strategies to avoid costly
                                    mistakes and make smarter decisions that grow your wealth.
                                </p>
                            </div>
                        </div>

                        {/* Right side (Book Image beside 1–3) */}
                        <div className="flex justify-center items-start">
                            <img loading="lazy"
                                src="/books/atoz/images/heronew2.webp"
                                alt="Dubai Real Estate Book"
                                className="w-52 md:w-60 lg:w-64 xl:w-92 mt-[5px] lg:mt-[-5px] mb-10 lg:mb-0 drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Points 4–6 (Below Image, Full Width) */}
                    <div className="mt-[-10px] md:mt-[25px] lg:mt-[25px] space-y-6">
                        <div>
                            <h4 className="text-yellow-400 font-bold text-lg">
                                4. Property Management & Legal Know-How
                            </h4>
                            <p className="text-gray-200 text-base text-justify">
                                Get practical advice on maintaining your investment, complying with
                                Dubai’s building codes, and protecting yourself during disputes to
                                ensure long-term success.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-yellow-400 font-bold text-lg">
                                5. Advanced Growth Insights
                            </h4>
                            <p className="text-gray-200 text-base text-justify">
                                Take your journey further with advanced strategies on building a
                                real estate career or business, working with international buyers,
                                and using branding and negotiation skills to stand out.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-yellow-400 font-bold text-lg">
                                6. Real-Life Guidance That Works
                            </h4>
                            <p className="text-gray-200 text-base text-justify">
                                Throughout the book, Mamata shares examples and practical insights
                                that make even complex ideas easy to understand. Whether you’re a
                                first time buyer, investor or aspiring professional, this book equips
                                you with the tools to succeed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-[#374151] text-[32px] items-center mt-12 md:mt-14 lg:mt-20">

                    <p> Get the Knowledge You Need</p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center items-center mt-2 md:mt-4 lg:mt-6">

                    <button
                        onClick={() => {window.location.href = `/books/atoz/checkout?type=hardcopy&reference=${ref}`}}
                        className="cursor-pointer bg-[#BE1E2D] relative group overflow-hidden rounded-lg shadow-[2px_4px_10px_0_rgba(0,0,0,0.30)] transition-all duration-300"

                    >
                        <div className="flex cursor-pointer items-center justify-center px-8 lg:px-[87px] py-6 lg:py-7 gap-4 group-hover:bg-gradient-to-b group-hover:from-[#123050] group-hover:to-[#1B497A] rounded-lg transition-all duration-300">
                            <span
                                className="heartbeat text-white text-center text-2xl sm:text-3xl lg:text-[35px] leading-7 font-bold"
                                style={{ fontFamily: "Roboto, sans-serif" }}
                            >
                                📥 Get Your Copy Now
                            </span>
                        </div>
                    </button>
                </div>
            </section >

            <section>
                <div  className="lg:min-h-screen xl:-mt-7 bg-gradient-to-br from-[#DCDCDC] to-[#E6E6E6] px-4 md:px-6 lg:px-8 flex items-center justify-center py-0 md:pb-4 lg:py-5 xl:py-12">
                    <div className="max-w-6xl w-full">
                        {/* Header */}
                        <div className="relative text-center mb-4 md:mb-0 lg:mb-32">
                            <h2 style={{fontFamily: 'Coustard'}} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#123050] mt-5 sm:mt-0 mb-0 md:mb-0 lg:mb-4 px-4">
                                Who is <span className="font-black">The A to Z of Dubai Real Estate Book</span> For?
                            </h2>
                            {/* Arrow SVG - Desktop only */}
                            <div className="absolute left-[19%] bottom-[-174px] hidden xl:block">
                                <svg width="203" height="203" viewBox="0 0 203 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.9">
                                        <path d="M79.5435 145.006L121.478 153.45L129.922 111.515" stroke="#123050" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M121.477 153.45L94.6836 113.147C76.1864 85.3229 83.747 47.7743 111.571 29.2771L116.609 25.928" stroke="#123050" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-start">
                            {/* Left Column */}
                            <div className="space-y-8 md:space-y-10 lg:space-y-12">
                                {/* Indian Investors */}
                                <div className="lg:mb-24">
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-gray-800">Indian Investors</h2>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                                        Looking for safe, high return opportunities abroad? Learn how to navigate Dubai's laws, avoid risks, and build a profitable portfolio.
                                    </p>
                                </div>

                                {/* Real Estate Professionals */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-gray-800">Real Estate Professionals</h2>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                                        Whether you're an agent, consultant, or aspiring entrepreneur, discover strategies to scale your career, work with international clients, and stand out in the market.
                                    </p>
                                </div>
                            </div>

                            {/* Center - Book Image */}
                            <div className="flex justify-center  items-center order-first lg:order-none md:my-0 lg:my-0">
                                <div className="relative">
                                    <img loading="lazy"
                                        src="/books/atoz/images/heronew.webp"
                                        alt="Book animation"
                                        className="w-56 md:w-96 xl:w-130 xl:h-110 lg:w-auto mt-[-4px] md:mt-0 lg:mt-[-78px]"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8 md:space-y-10 lg:space-y-12">
                                {/* First Time Buyers */}
                                <div className="lg:mb-20">
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-gray-800">First Time Buyers</h2>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                                        If you've never purchased property before, this book guides you through every step from choosing the right area to handling paperwork and financing.
                                    </p>
                                </div>

                                {/* NRIs & Global Buyers */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-gray-800">NRIs & Global Buyers</h2>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                                        For Indians living abroad and global buyers, the book offers insights into ownership rights, legal processes, and building wealth with Dubai property.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 5 */}
            <section>
                <div className="lg:min-h-screen flex items-center justify-center py-12 md:pb-14 lg:pb-16 px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl w-full bg-gradient-to-b from-[#123050] to-[#1B497A] from-0% to-100% p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg md:rounded-xl">
                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 px-2 leading-tight">
                                Why <span style={{fontFamily: 'Coustard'}}>The A to Z of Dubai Real Estate Book</span> Stands Out?
                            </h2>
                        </div>

                        {/* Top 3 Features - Full Width */}
                        <div className="w-full overflow-x-hidden">
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:max-w-[1100px] mx-auto">
                                {topFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start bg-gradient-to-t from-[#FFE08A] to-[#FFD700] shadow-lg rounded-3xl sm:rounded-[40px] lg:rounded-[50px] overflow-hidden"
                                    >
                                        {/* Icon */}
                                        <div
                                            className="flex-shrink-0 w-16 h-19 sm:w-14 sm:h-14 md:w-16 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg rounded-tl-3xl sm:rounded-tl-[40px] lg:rounded-tl-[50px] rounded-bl-3xl sm:rounded-bl-[40px] lg:rounded-bl-[50px] rounded-br-3xl sm:rounded-br-[40px] lg:rounded-br-[50px]"
                                        >
                                            <svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M53.3753 12.7083C50.5541 11.8187 47.4532 11.4375 44.4795 11.4375C39.5232 11.4375 34.1857 12.4542 30.5003 15.25C26.8149 12.4542 21.4774 11.4375 16.5212 11.4375C11.5649 11.4375 6.22741 12.4542 2.54199 15.25V52.4854C2.54199 53.1208 3.17741 53.7562 3.81283 53.7562C4.06699 53.7562 4.19408 53.6292 4.44824 53.6292C7.87949 51.9771 12.8357 50.8333 16.5212 50.8333C21.4774 50.8333 26.8149 51.85 30.5003 54.6458C33.9316 52.4854 40.1587 50.8333 44.4795 50.8333C48.6732 50.8333 52.9941 51.5958 56.5524 53.5021C56.8066 53.6292 56.9337 53.6292 57.1878 53.6292C57.8232 53.6292 58.4587 52.9937 58.4587 52.3583V15.25C56.9337 14.1062 55.2816 13.3437 53.3753 12.7083ZM53.3753 47.0208C50.5795 46.1312 47.5295 45.75 44.4795 45.75C40.1587 45.75 33.9316 47.4021 30.5003 49.5625V20.3333C33.9316 18.1729 40.1587 16.5208 44.4795 16.5208C47.5295 16.5208 50.5795 16.9021 53.3753 17.7917V47.0208Z" fill="white" />
                                                <path d="M44.4795 26.6875C46.7162 26.6875 48.8766 26.9163 50.8337 27.3483V23.485C48.8257 23.1037 46.6653 22.875 44.4795 22.875C40.1587 22.875 36.2445 23.6121 33.042 24.9846V29.2037C35.9141 27.5771 39.9045 26.6875 44.4795 26.6875ZM33.042 31.7454V35.9646C35.9141 34.3379 39.9045 33.4483 44.4795 33.4483C46.7162 33.4483 48.8766 33.6771 50.8337 34.1092V30.2458C48.8257 29.8646 46.6653 29.6358 44.4795 29.6358C40.1587 29.6358 36.2445 30.3983 33.042 31.7454ZM44.4795 36.4221C40.1587 36.4221 36.2445 37.1592 33.042 38.5317V42.7508C35.9141 41.1242 39.9045 40.2346 44.4795 40.2346C46.7162 40.2346 48.8766 40.4633 50.8337 40.8954V37.0321C48.8257 36.6254 46.6653 36.4221 44.4795 36.4221Z" fill="white" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 px-4 py-3 sm:px-4 sm:py-2 md:py-3">
                                            <h3 className="font-bold text-[#123050] mb-1 sm:mb-1 text-xs sm:text-sm md:text-base lg:text-base">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-800 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Section - Features with Image */}
                        <div className="flex flex-col lg:flex-row lg:gap-20 items-start lg:mt-[-14px]">
                            {/* Left side - Bottom 3 Features */}
                            <div className="w-full lg:flex-1 space-y-3 sm:space-y-4 mb-4 lg:mb-0 lg:max-w-[1100px]">
                                {bottomFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start bg-gradient-to-t from-[#FFE08A] to-[#FFD700] shadow-lg rounded-3xl sm:rounded-[40px] lg:rounded-[50px] overflow-hidden"
                                    >
                                        {/* Icon */}
                                        <div
                                            className="flex-shrink-0 w-16 h-19 sm:w-14 sm:h-14 md:w-16 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg rounded-tl-3xl sm:rounded-tl-[40px] lg:rounded-tl-[50px] rounded-bl-3xl sm:rounded-bl-[40px] lg:rounded-bl-[50px] rounded-br-3xl sm:rounded-br-[40px] lg:rounded-br-[50px]"
                                        >
                                            <svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M53.3753 12.7083C50.5541 11.8187 47.4532 11.4375 44.4795 11.4375C39.5232 11.4375 34.1857 12.4542 30.5003 15.25C26.8149 12.4542 21.4774 11.4375 16.5212 11.4375C11.5649 11.4375 6.22741 12.4542 2.54199 15.25V52.4854C2.54199 53.1208 3.17741 53.7562 3.81283 53.7562C4.06699 53.7562 4.19408 53.6292 4.44824 53.6292C7.87949 51.9771 12.8357 50.8333 16.5212 50.8333C21.4774 50.8333 26.8149 51.85 30.5003 54.6458C33.9316 52.4854 40.1587 50.8333 44.4795 50.8333C48.6732 50.8333 52.9941 51.5958 56.5524 53.5021C56.8066 53.6292 56.9337 53.6292 57.1878 53.6292C57.8232 53.6292 58.4587 52.9937 58.4587 52.3583V15.25C56.9337 14.1062 55.2816 13.3437 53.3753 12.7083ZM53.3753 47.0208C50.5795 46.1312 47.5295 45.75 44.4795 45.75C40.1587 45.75 33.9316 47.4021 30.5003 49.5625V20.3333C33.9316 18.1729 40.1587 16.5208 44.4795 16.5208C47.5295 16.5208 50.5795 16.9021 53.3753 17.7917V47.0208Z" fill="white" />
                                                <path d="M44.4795 26.6875C46.7162 26.6875 48.8766 26.9163 50.8337 27.3483V23.485C48.8257 23.1037 46.6653 22.875 44.4795 22.875C40.1587 22.875 36.2445 23.6121 33.042 24.9846V29.2037C35.9141 27.5771 39.9045 26.6875 44.4795 26.6875ZM33.042 31.7454V35.9646C35.9141 34.3379 39.9045 33.4483 44.4795 33.4483C46.7162 33.4483 48.8766 33.6771 50.8337 34.1092V30.2458C48.8257 29.8646 46.6653 29.6358 44.4795 29.6358C40.1587 29.6358 36.2445 30.3983 33.042 31.7454ZM44.4795 36.4221C40.1587 36.4221 36.2445 37.1592 33.042 38.5317V42.7508C35.9141 41.1242 39.9045 40.2346 44.4795 40.2346C46.7162 40.2346 48.8766 40.4633 50.8337 40.8954V37.0321C48.8257 36.6254 46.6653 36.4221 44.4795 36.4221Z" fill="white" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 px-4 py-3 sm:px-4 sm:py-2 md:py-3">
                                            <h3 className="font-bold text-[#123050] mb-1 sm:mb-1 text-xs sm:text-sm md:text-base lg:text-base">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-800 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right side - Book covers */}
                            <div className="flex-shrink-0 w-full lg:w-80 flex justify-center lg:justify-start">
                                <div className="relative w-56 sm:w-64 md:w-72 xl:w-90 lg:w-full">
                                    {/* Book mockup */}
                                    <div className="relative z-10 lg:mt-[-50px]">
                                        <img loading="lazy"
                                            src="/books/atoz/images/6.webp"
                                            alt="A to Z of Dubai Book"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial */}
            <div className="lg:min-h-screen bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-14">
                <div className="max-w-7xl w-full">
                    <h3 style={{fontFamily: 'Coustard'}} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-center text-slate-800 mb-8 sm:mb-12 md:mb-14 lg:mb-16 px-4">
                        Testimonials
                    </h3>

                    <div className="relative">
                        {/* Navigation Buttons - Hidden on mobile and tablet, shown on desktop */}
                        <button
                            onClick={prevSlide}
                            className="hidden cursor-pointer lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 xl:-translate-x-12 z-10 bg-white hover:bg-slate-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 items-center justify-center"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-slate-700" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="hidden cursor-pointer lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 xl:translate-x-12 z-10 bg-white hover:bg-slate-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 items-center justify-center"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-slate-700" />
                        </button>

                        {/* Testimonial Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                            {visibleTestimonials().map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col h-full min-h-[360px] sm:min-h-[400px] transition-all duration-500 hover:scale-105 ${index === 1 ? "hidden lg:flex" : ""
                                        }`}
                                >
                                    {/* Quote / Avatar Section (optional) */}
                                    <div className="flex items-center justify-center mb-6 relative"></div>

                                    {/* Testimonial Text */}
                                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 text-justify flex-grow flex items-center justify-center">
                                        {testimonial.text}
                                    </p>

                                    {/* Author Info (fixed bottom) */}
                                    <div className="text-center pt-4 border-t border-slate-200 mt-auto">
                                        {/* ⭐ Rating Stars */}
                                        <div className="flex justify-center mt-3 mb-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-slate-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm sm:text-base mt-1">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile & Tablet Navigation Arrows - Hidden on desktop */}
                        <div className="flex lg:hidden justify-center gap-4 mt-6 md:mt-7">
                            <button
                                onClick={prevSlide}
                                className=" bg-white hover:bg-slate-100 rounded-full p-2.5 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-white hover:bg-slate-100 rounded-full p-2.5 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-8 sm:mt-10 md:mt-11 lg:mt-12">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2.5 cursor-pointer sm:h-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-slate-700 w-8 sm:w-10 md:w-10'
                                        : 'w-2.5 sm:w-3 md:w-3 bg-slate-400 hover:bg-slate-500'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* secrets */}
            <div className="lg:min-h-screen pt-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-14 md:mb-16 leading-tight px-2"
                    >
                        <span className="text-[#123050] font-normal">6 Secrets on How </span>
                        <span className="text-[#123050] font-black">
                            The A to Z of Dubai Real Estate Book
                        </span>
                        <span className="text-[#123050] font-normal"> can Change Your Life</span>
                    </motion.h1>

                    {/* Secrets Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.25,
                                },
                            },
                        }}
                    >
                        {secrets.map((secret) => (
                            <motion.div
                                key={secret.number}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Secret Badge */}
                                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 z-10">
                                    <div className="bg-gradient-to-b from-[#123050] to-[#1B497A] text-white px-6 sm:px-8 py-1.5 sm:py-2 rounded-lg shadow-lg font-semibold text-sm sm:text-[30px]">
                                        Secret {secret.number}
                                    </div>
                                </div>

                                {/* Content Card - Fixed Height */}
                                <div className="bg-[#BE1E2D] rounded-lg p-6 sm:p-7 md:p-8 pt-10 sm:pt-11 md:pt-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[180px] sm:h-[260px] md:h-[200px] lg:h-[200px] flex flex-col">
                                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                                        {secret.title}
                                    </h3>
                                    <p className="text-white text-sm sm:text-[20px] text-justify leading-relaxed opacity-95 flex-grow">
                                        {secret.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="lg:min-h-screen flex items-center justify-center p-4 py-12 md:py-0 lg:py-0">
                <div className="max-w-7xl w-full bg-gradient-to-b from-[#123050] to-[#1B497A] rounded-[10px] shadow-2xl overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-20">

                    {/* Full-Width Heading */}
                    <div className="w-full text-left mb-8 sm:mb-4 md:mb-4">
                        <h3 style={{fontFamily: 'Coustard'}} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-5xl mx-auto lg:mx-0">
                           
                            <span className="text-white font-black">
                                Get Your Copy of "The A to Z of Dubai Real Estate" Today!

                            </span>{' '}
                         
                        </h3>
                    </div>

                    {/* Two-Column Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center relative">

                        {/* Left Content */}
                        <div className="flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 text-white max-w-2xl mx-auto lg:mx-0">
                            <p className="text-base sm:text-lg md:text-[25px] text-blue-100 font-medium">
                                Don't miss out – secure your copy before the next wave of savvy investors takes advantage.


                            </p>

                            <div className="space-y-3 sm:space-y-4 text-justify text-sm sm:text-base md:text-[22px] text-blue-50 leading-relaxed">
                                <p>
                                    Thanks for spending your time here today, I can't wait to help you
                                    discover how simple, profitable, and exciting Dubai's property
                                    market can be whether you're buying your first home, starting your
                                    investment journey, or building a real estate career.
                                </p>

                                <p>
                                    The keys to creating more wealth, more opportunities, and more
                                    freedom through Dubai real estate will soon be in your hands.
                                </p>

                                <div className="pt-2 sm:pt-4">
                                    <p className="text-white">Sincerely,</p>
                                    <p className="text-yellow-400 font-bold text-lg sm:text-xl mt-1">
                                        Mamata Dhiraj Jain
                                    </p>
                                    <p className="text-white text-sm">Managing Director, 1XL</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Book Image */}
                        <div className="relative hidden lg:flex items-center justify-center lg:justify-end">
                            <img loading="lazy"
                                src="/books/atoz/images/6.webp"
                                alt="Front Book"
                                className="w-full sm:w-72 md:w-80 lg:w-[480px] xl:w-[520px] object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* CTA Button */}
            <div className="flex justify-center items-center my-0 md:mt-14 lg:mt-16">
                <button
                    onClick={() => {window.location.href = `/books/atoz/checkout?type=hardcopy&reference=${ref}`}}
                    className="cursor-pointer bg-[#BE1E2D] relative group overflow-hidden rounded-lg shadow-[2px_4px_10px_0_rgba(0,0,0,0.30)] transition-all duration-300"

                >
                    <div className="flex cursor-pointer items-center justify-center px-8 lg:px-[87px] py-6 lg:py-7 gap-4 group-hover:bg-gradient-to-b group-hover:from-[#123050] group-hover:to-[#1B497A] rounded-lg transition-all duration-300">
                        <span
                            className="heartbeat text-white text-center text-2xl sm:text-3xl lg:text-[35px] leading-7 font-bold"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            📥 Get Your Copy Now
                        </span>
                    </div>
                </button>
            </div>
            {/* <div className="min-h-screen py-12 md:py-14 lg:py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#123050] leading-tight">
                            Join the Growing Community of Smart Investors Who are
                            <br className="hidden md:block" />
                          Navigating Dubai Real Estate With Confidence!

                        </h2>

                        <div className="pt-4 space-y-2">
                            <p className="text-lg md:text-[25px] text-[#374151] font-semibold">
                                Let Me Know Where to Ship Your Copy of The A To Z Of Dubai Real Estate and

                            </p>
                            <p className="text-lg md:text-[25px] text-[#374151] font-semibold">
                                Start Building Your Property Portfolio the Right Way Today!

                            </p>
                        </div>
                    </div>

                    <div className="mb-0 lg:mb-12 overflow-hidden shadow-2xl">
                        <img loading="lazy"
                            src="/books/atoz/images/imge.webp"
                            alt="Community of smart investors with Dubai Real Estate book"
                            className="w-full h-auto"
                        />
                    </div>


                </div>
            </div> */}


            <div id='faqs' className="lg:min-h-screen bg-gradient-to-b from-[#123050] to-[#1B497A] from-0% to-100% py-12 sm:py-14 xl:mt-5 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <h3 style={{fontFamily: 'Coustard'}} className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px]  font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-2 leading-tight">
                        Frequently Asked Questions
                    </h3>

                    {/* FAQ Items */}
                    <div className="space-y-3 sm:space-y-4 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center cursor-pointer justify-between p-4 sm:p-5 md:p-6 lg:p-6 text-left "
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-semibold text-gray-900 pr-3 sm:pr-4 md:pr-6 lg:pr-8 leading-snug">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0 cursor-pointer">
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 transition-transform duration-300" />
                                        ) : (
                                            <Plus className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 transition-transform duration-300" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-4 sm:px-5 md:px-6 lg:px-6 pb-4 sm:pb-5 md:pb-6 pt-2">
                                        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                                            {/* <span className="text-blue-600 text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5 sm:mt-0.5 md:mt-1">👉</span> */}
                                            <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 leading-relaxed">
                                                👉 {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center items-center my-12">
                <button
                    onClick={() => {window.location.href = `/books/atoz/checkout?type=hardcopy&reference=${ref}`}}
                    className="cursor-pointer bg-[#BE1E2D] relative group overflow-hidden rounded-lg shadow-[2px_4px_10px_0_rgba(0,0,0,0.30)] transition-all duration-300"

                >
                    <div className="flex cursor-pointer items-center justify-center px-8 lg:px-[87px] py-6 lg:py-7 gap-4 group-hover:bg-gradient-to-b group-hover:from-[#123050] group-hover:to-[#1B497A] rounded-lg transition-all duration-300">
                        <span
                            className="heartbeat text-white text-center text-2xl sm:text-3xl lg:text-[35px] leading-7 font-bold"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            📥 Get Your Copy Now
                        </span>
                    </div>
                </button>
            </div>

            <footer className="bg-gradient-to-b from-[#123050] to-[#1B497A] from-0% to-100% text-white mb-10 md:mb-14">
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                    {/* Logo Section - Full Width */}
                    <div className="mb-8 cursor-pointer">
                        <a href="https://www.DrMamataJain.com" target='_blank'>

                            <img loading="lazy"
                                src="/books/atoz/images/logo.webp"
                                alt="1XL Infra Logo"
                                className="h-auto lg:w-[20%]"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                }}
                            />
                            <div style={{ display: 'none' }} className="bg-white text-[#2c5282] px-4 py-2 inline-block font-bold text-xl">
                                1XL INFRA
                            </div>
                        </a>
                    </div>

                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* About the Book */}
                        <div>
                            <h3 className="text-[20px] font-bold mb-4">About the Book</h3>
                            <p className="text-gray-200 text-[18px] leading-relaxed text-justify">
                                Your guide to buying, investing, and succeeding in Dubai's real
                                estate. Practical strategies, future trends, and expert insights-simplified.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-[20px] font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.src}
                                            className="text-gray-200 hover:text-white text-[18px] transition-all inline-block py-1 rounded-md hover:bg-white/10"
                                        >
                                            {link.link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-[20px] font-bold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Privacy Policy", path: "/books/atoz/privacy-policy" },
                                    { name: "Terms & Conditions", path: "/books/atoz/terms" },
                                    { name: "Return Policy", path: "/books/atoz/return-policy" },
                                    { name: "Shipping Policy", path: "/books/atoz/shipping-policy" },
                                    { name: "Payment Policy", path: "/books/atoz/payment-policy" },
                                    { name: "Cookie Policy", path: "/books/atoz/cookie-policy" },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.path}
                                            className="text-gray-200 hover:text-white text-[18px] transition-all inline-block py-1 rounded-md hover:bg-white/10"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>



                        {/* Connect With Us */}
                        <div>
                            <h3 className="text-[20px] font-bold mb-4">Connect With Us</h3>

                           <a
  href="mailto:support@1XL.com"
  onClick={(e) => {
    if (window.innerWidth > 768) {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=support@1XL.com",
        "_blank"
      );
      e.preventDefault();
    }
  }}
  className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-white/10 text-sm mb-6 group cursor-pointer"
>
                                <svg
                                    className="w-5 h-5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-[18px] break-all">support@1XL.com</span>
                            </a>


                            {/* Social Icons */}
                            <div className="flex flex-nowrap gap-2 pb-2">
                                <a
                                    href="https://www.instagram.com/MamataJain1XL/"
                                    className="relative group w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="Instagram"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        Instagram
                                    </span>
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/MamataJain1XL/"
                                    className="relative group w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="LinkedIn"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        LinkedIn
                                    </span>
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.facebook.com/MamataJain1XL/"
                                    className="relative group w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="Facebook"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        Facebook
                                    </span>
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.youtube.com/@MamataJain1XL"
                                    className="relative group w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="YouTube"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        YouTube
                                    </span>
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://x.com/MamataJain1XL"
                                    className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="X"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        X
                                    </span>
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.threads.com/@MamataJain1XL"
                                    className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="Threads"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        Threads
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802c.756-1.081 1.753-1.502 3.132-1.502c.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137c0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994C1 2.034 4.482 0 8.044 0C9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79c0 4.143 2.254 6.343 5.63 6.343c2.777 0 4.847-1.443 4.847-3.556c0-1.438-1.208-2.127-1.27-2.127c-.236 1.234-.868 3.31-3.644 3.31c-1.618 0-3.013-1.118-3.013-2.582c0-2.09 1.984-2.847 3.55-2.847c.586 0 1.294.04 1.663.114c0-.637-.54-1.728-1.9-1.728c-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416c0 .878 1.043 1.168 1.6 1.168c1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"
                                        />
                                    </svg>
                                </a>

                                {/* <a
                                    href="https://www.quora.com/profile/MamataJain1XL"
                                    className="relative group w-8 h-8 bg-[#b92b27] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="Quora"
                                    target='blank'

                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        Quora
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M20.94 17.46h-1.11c-.06.52-.4 1.17-1.25 1.17c-.78 0-1.34-.54-1.88-1.36a7.23 7.23 0 0 0 2.84-5.81C19.54 7 15.86 4 12.01 4C8.21 4 4.5 7.03 4.5 11.47c0 4.4 3.71 7.43 7.51 7.43c.66 0 1.32-.09 1.95-.26c.74 1.27 1.73 2.36 3.6 2.36c3.1 0 3.45-2.86 3.38-3.54m-5.45-2.18c-.73-1.11-1.66-1.98-3.46-1.98c-1.16 0-2.06.38-2.62.86l.46.92c.24-.11.49-.15.75-.15c1.35 0 2.04 1.17 2.63 2.33c-.38.11-.79.16-1.24.16c-2.85 0-4.08-2.01-4.08-5.95c0-3.96 1.23-5.99 4.08-5.99c2.89 0 4.13 2.03 4.13 5.99c-.01 1.58-.21 2.86-.65 3.81"
                                        />
                                    </svg>
                                </a> */}

                                <a
                                    href="https://www.pinterest.com/MamataJain1XL/"
                                    className="relative group w-8 h-8 bg-[#e60023] rounded flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label="Pinterest"
                                    target='blank'
                                >
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                        Pinterest
                                    </span>
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/20 my-8"></div>

                    {/* Copyright */}
                    <p className="text-center text-gray-300 text-sm">
                       © {new Date().getFullYear()}{" "}

                        <a
  href="https://www.DrMamataJain.com"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer text-gray-300 hover:text-red-600 transition-colors duration-300"
>
  Mamata Dhiraj Jain.
</a> All Rights Reserved.
                    </p>

                </div>
            </footer>
            {/* sticky footer */}
            <div className="fixed border-1 rounded-t-xl bottom-0 left-0 right-0 bg-[#BE1E2D] shadow-2xl z-50">
                <div className="flex items-center justify-between gap-2 px-6 sm:px-8 lg:px-20 py-1 lg:py-3 overflow-x-auto no-scrollbar">
                   
                    <div className="bg-gradient-to-t from-[#FFE08A] to-[#FFD700] flex items-center justify-center rounded-md px-4 py-1 sm:px-6 sm:py-3 text-center flex-shrink-0">
                        <span className="heartbeat text-[#123050] font-bold text-lg sm:text-2xl whitespace-nowrap">
                            {symbol}{price}{" "}
                            <span className="line-through text-gray-700 text-sm sm:text-2xl ml-1">
                                {symbol}{actualPrice}
                            </span>
                        </span>
                    </div>


                    
                    <div className="flex-1 flex items-center justify-center min-w-[120px] sm:min-w-[120px]">
                        <div className="text-center">
                            <p className="text-white text-[10px] sm:text-[13px] mb-0">
                                Offer Will Expire In
                            </p>
                            <div className="flex items-center justify-center gap-[4px] sm:gap-2">
                               
                                <div className="text-center">
                                    <div className="text-[#FEFC86] font-bold text-[18px] sm:text-[24px]">
                                        {String(timeLeft.hours).padStart(2, "0")}
                                    </div>
                                    <div className="text-white text-[9px] sm:text-[12px]">
                                        Hours
                                    </div>
                                </div>
                                <span className="text-[#FEFC86] font-bold text-[18px] sm:text-[24px] pb-3 sm:pb-4">
                                    :
                                </span>

                                
                                <div className="text-center">
                                    <div className="text-[#FEFC86] font-bold text-[18px] sm:text-[24px]">
                                        {String(timeLeft.minutes).padStart(2, "0")}
                                    </div>
                                    <div className="text-white text-[9px] sm:text-[12px]">
                                        Minutes
                                    </div>
                                </div>
                                <span className="text-[#FEFC86] font-bold text-[18px] sm:text-[24px] pb-3 sm:pb-4">
                                    :
                                </span>

                                
                                <div className="text-center">
                                    <div className="text-[#FEFC86] font-bold text-[18px] sm:text-[24px]">
                                        {String(timeLeft.seconds).padStart(2, "0")}
                                    </div>
                                    <div className="text-white text-[9px] sm:text-[12px]">
                                        Seconds
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <button
                       onClick={() => {window.location.href = `/books/atoz/checkout?type=ebook&reference=${ref}`;}}
                        className="cursor-pointer bg-white text-black lg:w-[160px] sm:text-[25px] flex-shrink-0 cta-text font-semibold px-3 sm:px-5 py-2 rounded-md 
             transition-all duration-300 ease-in-out text-[12px] whitespace-nowrap 
             hover:bg-gradient-to-b hover:from-[#123050] hover:to-[#1B497A] hover:text-white hover:shadow-lg hover:scale-105"
                    >
                        <span className="heartbeat">Order Now</span>
                    </button>

                </div>
            </div>
        </div >
        </>
    )
}

export default Index
