import React from 'react';
import { 
  BookOpen, 
  Award, 
  Trophy,
  Book,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 text-white">

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 p-6">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">AS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Amaan Siddiquie</h1>
              <p className="text-gray-400">B.Tech CS & AI • 2024-2028</p>
              <p className="text-sm text-gray-500">Roll No: LCI2024033</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Progress */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Semester Performance */}
          <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 p-6 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-indigo-400" />
              Semester Performance
            </h2>
            <div className="space-y-4">
              {[
                { semester: 'Semester 1', gpa: '8.7', status: 'Completed' },
                { semester: 'Semester 2', gpa: '8.9', status: 'Completed' },
                { semester: 'Semester 3', gpa: '8.5', status: 'Completed' },
                { semester: 'Semester 4', gpa: '8.8', status: 'In Progress' }
              ].map((sem, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Book className="h-5 w-5 text-indigo-400" />
                    <div className="ml-4">
                      <p className="font-medium text-white">{sem.semester}</p>
                      <p className="text-sm text-gray-400">{sem.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-white">{sem.gpa}</p>
                    <p className="text-sm text-gray-400">GPA</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Courses */}
          <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-indigo-400" />
              Current Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Data Structures', progress: 75, credits: 4 },
                { name: 'Computer Networks', progress: 65, credits: 4 },
                { name: 'Database Systems', progress: 80, credits: 4 },
                { name: 'Operating Systems', progress: 70, credits: 4 }
              ].map((course, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-white">{course.name}</h3>
                    <span className="text-sm text-gray-400">{course.credits} credits</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-500 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{course.progress}% Complete</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Academic Achievements */}
          <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-indigo-400" />
              Achievements
            </h2>
            <div className="space-y-4">
              {[
                { title: "Hackothon Winner", term: '2024-25' },
                { title: 'Academic Excellence Award', term: 'Spring 2023' },
                { title: 'Research Paper Published', term: 'Summer 2023' }
              ].map((achievement, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-800 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <div className="ml-3">
                    <p className="font-medium text-white">{achievement.title}</p>
                    <p className="text-sm text-gray-400">{achievement.term}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Goals */}
          <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-indigo-400" />
              Academic Goals
            </h2>
            <div className="space-y-4">
              {[
                { goal: 'Maintain CGPA above 8.5', status: 'On Track' },
                { goal: 'Complete Advanced AI Course', status: 'In Progress' },
                { goal: 'Research Project Submission', status: 'Pending' }
              ].map((goal, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="ml-3 font-medium text-white">{goal.goal}</p>
                  </div>
                  <span className="text-sm text-gray-400">{goal.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
