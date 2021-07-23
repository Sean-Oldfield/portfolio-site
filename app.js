var app = new Vue({
    el: '#app',
    data: {
        selectedJob: 'surple',
        jobs: {
            surple: {
                company: 'Surple Energy',
                title: 'Founder & Full-Stack Software Developer',
                dates: 'Jan 2018 - Present',
                url: 'https://surple.co.uk',
                desc: [
                    "Developing and maintaining the company's energy analytics product which helped businesses to understand their energy use.",
                    "Working with a small team of developers to bring this new product to life, entirely from scratch.",
                    "Writing code on both the front-end and back-end and deploying new product iterations for our users.",
                    "The product was built with Laravel and hosted on AWS. It also utilised the JavaScript framework Vue.js on the front-end.",
                    "Surple's developers followed the Scrum framework for Agile Software Development. I was responsible for ensuring the team adhered to these principles."
                ]
            },
            alacrity: {
                company: 'The Alacrity Foundation',
                title: 'Technical Lead',
                dates: 'Aug 2017 - Oct 2018',
                url: 'https://alacrityfoundation.co.uk/',
                desc: [
                    "The Alacrity Foundation is an entrepreneurship course designed to empower graduates to create the next generation of technology companies.",
                    "During my time at Alacrity, I received mentorship from more than 70 world-class mentors in various fields, such as entrepreneurship, software development, marketing, and business administration.",
                    "As a Technical Lead, it was my responsibility to build a scalable product that could take advantage of an exciting market opportunity.",
                    "I graduated from The Alacrity Foundation by founding my energy startup, Surple and securing venture capital investment to help grow the company."
                ]
            },
            bootcamp: {
                company: 'Software Development Bootcamp',
                title: 'Technical Lead',
                dates: 'Jun 2017 - Aug 2017',
                url: 'https://alacrityfoundation.co.uk/',
                desc: [
                    "Before joining The Alacrity Foundation, everything I knew about software development was self-taught. To prove myself, I had to complete an eight-week software development bootcamp.",
                    "I successfully completed the bootcamp after building and presenting my final project — a web app that helped with recruitment. This secured my place on The Alacrity Foundation's entrepreneurship programme.",
                    "During my time on the bootcamp, I acquired valuable knowledge about software development fundamentals and was introduced to technologies, including PHP, HTML, CSS, Javascript, Git, and MySQL."
                ]
            },
            university: {
                company: 'Swansea University',
                title: 'Biology Undergraduate',
                dates: 'Sep 2014 - Jun 2017',
                url: 'https://www.swansea.ac.uk/',
                desc: [
                    "Whilst studying Biology at Swansea University, I achieved First Class Honours and excelled at technology-based modules.",
                    "My strongest grades came from the Advanced Data Analysis (84%) and Data Analysis & Presentation (84%) modules. This involved using the statistical programming language R to analyse and visualise biological data."
                ]
            }
        }
    },
    methods: {
        selectJob(job) {
            this.selectedJob = job;
        }
    }
});