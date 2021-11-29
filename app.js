var app = new Vue({
    el: '#app',
    data: {
        selectedJob: 'surple',
        jobs: {
            surple: {
                company: 'Surple Energy',
                title: 'Founder & Full-Stack Software Engineer',
                dates: 'Jan 2018 - Nov 2021',
                url: 'https://surple.co.uk',
                desc: [
                    "Wrote modern, performant, maintainable code whilst building Surple's energy analytics product entirely from scratch.",
                    'Delivered software to a diverse array of large clients, including an energy supplier, a hospitality resort and a city council.',
                    'Worked with various front-end and back-end languages, platforms and frameworks such as Laravel, PHP, JavaScript, Vue, HTML & CSS, MySQL and AWS.',
                    'Communicated and worked with stakeholders including engineers, product managers and clients on a daily basis in an agile software development environment.',
                    "Played an instrumental part in Surple winning Green Startup of the Year at the Wales Startup Awards and being selected for Google's UK Immersion Programme and Tech Nation's Net Zero and Rising Stars programmes.",
                ],
            },
            alacrity: {
                company: 'The Alacrity Foundation',
                title: 'Technical Lead',
                dates: 'Aug 2017 - Oct 2018',
                url: 'https://alacrityfoundation.co.uk/',
                desc: [
                    'The Alacrity Foundation is an entrepreneurship course designed to empower graduates to create the next generation of technology companies.',
                    'During my time at Alacrity, I received mentorship from more than 70 world-class mentors in various fields, such as entrepreneurship, software development, marketing, and business administration.',
                    'As a Technical Lead, it was my responsibility to build a scalable product that could take advantage of an exciting market opportunity.',
                    'I graduated from The Alacrity Foundation by founding my energy startup, Surple and securing £250,000 in venture capital investment to help grow the company.',
                ],
            },
            bootcamp: {
                company: 'Software Development Bootcamp',
                title: 'Technical Lead',
                dates: 'Jun 2017 - Aug 2017',
                url: 'https://alacrityfoundation.co.uk/',
                desc: [
                    'Before joining The Alacrity Foundation, everything I knew about software development was self-taught. To prove myself, I had to complete an eight-week software development bootcamp.',
                    "I successfully completed the bootcamp after building and presenting my final project — a web app that simplified the recruitment process. This secured my place on The Alacrity Foundation's entrepreneurship programme.",
                    'During my time on the bootcamp, I acquired valuable knowledge about software development fundamentals and was introduced to technologies, including PHP, HTML, CSS, Javascript, Git, and MySQL.',
                ],
            },
            university: {
                company: 'Swansea University',
                title: 'Biology Undergraduate',
                dates: 'Sep 2014 - Jun 2017',
                url: 'https://www.swansea.ac.uk/',
                desc: [
                    'Whilst studying Biology at Swansea University, I achieved First Class Honours and excelled at technology-based modules.',
                    'My strongest grades came from the Advanced Data Analysis (84%) and Data Analysis & Presentation (84%) modules. This involved using the statistical programming language R to analyse and visualise biological data.',
                ],
            },
        },
    },
    methods: {
        selectJob(job) {
            this.selectedJob = job;
        },
    },
});
