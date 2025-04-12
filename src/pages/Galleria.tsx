import React from 'react';
import { X } from 'lucide-react';
import inspire from '../assets/apex_inspire_2024-2025.jpeg';
import orion_statue from '../assets/orion_2023-2024.jpeg';
import orion_certificate from '../assets/orion_award.jpeg';
import jupiter_statue from '../assets/jupiter_2023-2024.jpeg';
import jupiter_certificate from '../assets/jupiter_award.jpeg';
import aws_cloud_practitioner from '../assets/aws_cloud_practitioner.jpg';
import python_udemy from '../assets/python_udemy.jpg';
import react_udemy from '../assets/react_udemy.jpg';

function Galleria() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const images = [
    {
      url: inspire,
      title: 'Inspiration Award'
    },
    {
      url: orion_certificate,
      title: 'Orion Certificate'
    },
    {
      url: orion_statue,
      title: 'Orion Statue'
    },
    {
      url: jupiter_statue,
      title: 'Jupiter Statue'
    },
    {
      url: jupiter_certificate,
      title: 'Jupiter Certificate'
    },
    {
      url: aws_cloud_practitioner,
      title: 'AWS Cloud Practitioner'
    },
    {
      url: react_udemy,
      title: 'React JS'
    },
    {
      url: python_udemy,
      title: 'Python'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-40">
          <h1 className="text-5xl font-bold mb-20 text-center">Photo Gallery</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className={`relative aspect-square overflow-hidden rounded-xl`}>
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* <iframe src={image.url} allow="autoplay" alt={image.title}></iframe> */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default Galleria;
