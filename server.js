const express = require('express')
const app =express()
const PORT = 8000
const projects = {
    'Worksy': {
    'branch': 'Android Development',
    'tech-stack': 'Flutter',
    'picture': '',//add bit64 img||add an image through assets..?
    'status': 'Complete',
    'description': "Upskilling and networking application for the unorganized sector. Features: Video Player Video learning resource Connected to firebase - Firestore(cloud storage) But uploading and retriving isn't completely done. Implemented marketplace prototype(was supposed to be similar to Instagram’s feed. It isn’t quite there yet.  Google, Facebook, and Github authentication are planned. User profiles pending. Improve UI Alot more to be done ABSTRACT: Upskilling is essential in every walk of life. We see a lot of up-skilling applications for STEM (science, technology, engineering, and mathematics) related fields. So, we know the functionality and benefits we stand to gain through the use of these applications. We’d like to present similar learning opportunities for all the other fields through this application. The front-end of this android application will be designed using Flutter. Google’s Firebase will be used for the back-end of the application as it provides a real-time database and other features for building mobile apps. We do also intend to beta test this application with a few users within the target customer range to see if and how we can improvise the application to provide a better user experience. Intro: The problem we’ve chosen to solve is two-part. The first being ‘providing up-skilling opportunities to all while also promoting lifelong learning opportunities and later a chance at apprenticeship to mentors from their chosen field (if available). Lifelong learning opportunities as in a chance for everyone to learn what interests them no matter their age or profession, in essence, opportunities for everyone to pursue their passion. This is where the second part of our challenge comes in. ‘Productive employment’. We firmly believe that when people are passionate about their work they will most certainly be productive. So, when we start learning and working in our fields of interests we would be productive. We will also provide them opportunities to exhibit and advertise their work. We hope this will help support their chances at sustaining in their chosen field.",
    'link': 'https://github.com/TarunHoKage7/worksy',
    'last-modified': 'August 2021',
    },

    'BusTrack': {
        'branch': 'Web Development',
        'tech-stack': 'HTML, CSS, JS, Node.js, Express, MongoDB',
        'picture': '',
        'status': 'In-complete',
        'description': 'Transport Tracking System',
        'link': 'https://github.com/TarunHoKage7/BusTrack',
        'last-modified': 'June 2022',
    },

    'RFID Locking System': {
        'branch': 'IOT',
        'tech-stack': '',
        'picture': '',
        'status': 'Complete',
        'description': 'RFID scanner based door locking system',
        'link': '',
        'last-modified': 'june 2020',
    }
}

app.get('/', (req,res) => {   //this looks like a function and an eventListener 
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res) => {
    res.json(projects)
})

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`The server is now running on port ${PORT}! You better go catch it!`)
})