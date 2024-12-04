import React from 'react';
import { Globe, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Random Vacation Picker</h1>
        <p className="text-xl text-gray-600">Inspiring spontaneous adventures around the world</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Random Vacation Picker was born from a simple idea: to make travel planning exciting and 
            spontaneous. We believe that sometimes the best adventures are the ones we never expected. 
            Our platform helps travelers break free from decision paralysis and discover amazing 
            destinations they might never have considered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Team</h3>
            <p className="text-gray-600">
              We're a passionate group of travelers and tech enthusiasts dedicated to making travel 
              discovery fun and accessible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To inspire people to explore the world in unexpected ways and make travel planning 
              an exciting part of the journey.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Heart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in spontaneity, adventure, and making travel accessible to everyone.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our vacation destination generator uses smart algorithms to suggest perfect travel 
              destinations based on a carefully curated database of amazing locations worldwide. 
              Each suggestion comes with comprehensive information about the destination, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Best time to visit</li>
              <li>Must-see attractions</li>
              <li>Local cuisine highlights</li>
              <li>Cultural insights</li>
              <li>Practical travel information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}