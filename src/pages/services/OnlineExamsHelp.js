import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, GraduationCap, Shield, Clock, Stethoscope } from 'lucide-react';

const OnlineExamsHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative w-full py-20 md:py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${require('../../assets/images/banner-4-1.jpg2_-1.jpg')})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Online Exams Help
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            PassNursing.com is your dedicated partner in navigating the complexities of healthcare education, offering personalized support for academic success.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white rounded-xl p-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-800">Online Exam Help</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Are you grappling with the challenges of an online class that seems insurmountable? Your search for a solution ends here, at PassNursing.com. We specialize in providing comprehensive assistance to manage your online course, ensuring not just timely submissions but also impressive grades in your assignments and exams. With our top-tier online class help services, you’ll experience a transformation in your academic journey, backed by the expertise of qualified subject matter experts.
            </p>

            <h3 className="font-heading font-semibold text-xl text-gray-800">Unveiling Our Online Class Help Services: Your Path to Success</h3>

            <p className="text-gray-700 leading-relaxed">
              At PassNursing.com, we understand the unique demands of remote learning and the complexities that come with it. Our mission is to navigate these challenges on your behalf, ensuring that your online class becomes a stepping stone to success rather than a source of frustration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-secondary text-white rounded-lg p-2">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Expert Support</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your online class will be managed by our team of qualified experts who are well-versed in your specific test subject. They bring a wealth of experience to the table, ensuring that every aspect of your class is handled with precision.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-secondary text-white rounded-lg p-2">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Insightful Guidance</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Excelling in an online class demands more than just rote learning. Our experts provide insights on how to approach the course material, offering guidance on study techniques and strategies to boost your comprehension.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-secondary text-white rounded-lg p-2">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Sample Questions</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Preparing for tests becomes a breeze with our sample questions. These valuable resources help you gain familiarity with the test format and ensure you’re well-prepared to tackle any challenge.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-secondary text-white rounded-lg p-2">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">Proctored Exam Assistance</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The hurdle of online proctored exams is no longer a concern. Our experts are equipped to guide you through the process and even take the exam on your behalf, ensuring a stress-free experience.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-primary text-white rounded-lg p-2">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-gray-800">Committed to Your Success</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our commitment extends beyond providing assistance; we’re dedicated to ensuring your success. We work tirelessly to make certain that you’re not just passing your online class but also earning the credit you deserve.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">The PassNursing Difference: Your Partner in Success</h3>
              <p className="text-gray-700 leading-relaxed">
                In a world where online education has become the norm, PassNursing.com stands as your reliable partner in conquering the challenges that come with it. Our comprehensive approach, expert guidance, and commitment to your success set us apart as the ideal choice for turning your online class into a remarkable achievement.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We’ve witnessed students transform their academic trajectory with our assistance, embracing online classes with newfound confidence and emerging with impressive grades. As you navigate the landscape of remote learning, remember that you don’t have to face it alone. We are here to elevate your online class experience, helping you overcome obstacles and emerge victorious.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your online class journey is about to take a positive turn. Welcome to PassNursing.com, where academic success in the world of online classes is no longer a distant dream but a tangible reality.
              </p>
            </div>

            <div className="text-center">
              <button className="btn-primary">Request This Service</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineExamsHelp;


