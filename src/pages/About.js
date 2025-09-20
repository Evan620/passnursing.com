import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  GraduationCap,
  Stethoscope,
  BookOpen,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We understand the challenges nursing students face and provide empathetic, personalized support that goes beyond just academic assistance.',
      details: [
        'Personalized learning plans',
        'Emotional support and encouragement',
        'Understanding of student struggles',
        'Flexible scheduling options'
      ]
    },
    {
      icon: Target,
      title: 'Focused Excellence',
      description: 'Our specialized approach ensures you receive targeted assistance for nursing-specific challenges with expert knowledge.',
      details: [
        'Nursing-specific expertise',
        'Industry-relevant content',
        'Evidence-based practices',
        'Clinical experience integration'
      ]
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'We foster an environment where students learn together and support each other\'s success in a community setting.',
      details: [
        'Peer learning opportunities',
        'Study group facilitation',
        'Mentorship programs',
        'Community support network'
      ]
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself with a 95% success rate among our nursing students and consistent positive feedback.',
      details: [
        '95% success rate',
        'High student satisfaction',
        'Improved exam scores',
        'Career advancement support'
      ]
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Nursing Educator',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      experience: '15+ years in nursing education',
      specialties: ['Critical Care', 'Medical-Surgical', 'Leadership']
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Senior Pharmacology Specialist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      experience: '12+ years in pharmaceutical nursing',
      specialties: ['Pharmacology', 'Medication Management', 'Drug Interactions']
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Nursing Expert',
      image: 'https://images.unsplash.com/photo-1594824577062-3a3c5d3b8b8b?w=300&h=300&fit=crop&crop=face',
      experience: '10+ years in pediatric care',
      specialties: ['Pediatrics', 'Child Development', 'Family Care']
    },
    {
      name: 'Prof. David Thompson',
      role: 'Mental Health Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      experience: '8+ years in psychiatric nursing',
      specialties: ['Mental Health', 'Therapeutic Communication', 'Crisis Intervention']
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Helped', icon: Users },
    { number: '50+', label: 'Nursing Courses', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '15+', label: 'Expert Tutors', icon: GraduationCap },
    { number: '4.9/5', label: 'Student Rating', icon: Star }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Nursing Exams Pros was founded with a mission to support nursing students through their educational journey.'
    },
    {
      year: '2019',
      title: 'Growth',
      description: 'Expanded our team with specialized nursing educators and developed comprehensive study materials.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online tutoring platform and virtual learning resources during the pandemic.'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Received accreditation as a leading nursing education support provider.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Introduced AI-powered study tools and personalized learning algorithms.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              About Us
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Dedicated to personalized nursing education, we understand that each 
              student's path is unique. Our mission is to build a foundation of 
              success for every nursing student we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are dedicated to personalized education, understanding that each individual's 
                path is unique. By offering tailored guidance, expert insights, and resources that 
                cater to various learning styles, we aim to build a foundation of success for 
                every student we serve.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced nursing professionals and educators work together to 
                provide comprehensive support that goes beyond just passing exams. We're committed 
                to helping you develop the critical thinking skills and clinical knowledge 
                essential for your nursing career.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8"
            >
              <h3 className="font-heading font-bold text-2xl text-gray-800 mb-6">
                Our Vision
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Empowering Future Nurses</h4>
                    <p className="text-gray-600 text-sm">Creating confident, competent nursing professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Excellence in Education</h4>
                    <p className="text-gray-600 text-sm">Setting the standard for nursing education support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Innovation & Growth</h4>
                    <p className="text-gray-600 text-sm">Continuously improving our methods and resources</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to nursing education excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-accent" />
                  </div>
                  <div className="font-heading font-bold text-3xl md:text-4xl mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do in supporting nursing students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary p-4 rounded-2xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-gray-800">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>

                  <div className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced nursing professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-2xl"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Stethoscope className="h-8 w-8 text-primary bg-white rounded-full p-1 shadow-lg" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience}</p>

                <div className="space-y-1">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="inline-block bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones in our mission to support nursing education
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-background rounded-2xl p-6 shadow-lg">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Quote className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ready to Start Your Nursing Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of nursing students who have achieved their academic goals 
              with our personalized support and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Request Service Now
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
