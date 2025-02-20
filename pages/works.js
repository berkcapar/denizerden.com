import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const WorksContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 120px 20px 60px;
  max-width: 800px;
  margin: 0 auto;
`;

const WorksHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #333;
  text-align: center;

`;

const Timeline = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`;

const YearSection = styled.div`
  margin-bottom: 4rem;
`;

const Year = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const Project = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 1rem;
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  margin-bottom: 1rem;
`;

const EmbeddedMedia = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const works = [
  {
    year: 2024,
    projects: [
      {
        title: "Anicca - Debut Album",
        type: "spotify",
        embedUrl: "https://open.spotify.com/embed/album/4U5S6FCySDStqGuBZ2cy1Z"
      },
      {
        title: "Anicca Offical Video",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/-EGVEkzLSh4"
      }
    ]
  },
  {
    year: 2023,
    projects: [
      {
        title: "Contemporary Piano: Japan Composers (Live in Japan)",
        type: "spotify",
        embedUrl: "https://open.spotify.com/embed/album/2PQbz6u4RsnE1kwjPezJwT"
      },
      {
        title: "Deniz Erden - Fazıl Say, Yürüyen Köşk (Live in Japan)",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/Xl-2WFL9mz8"
      },
      {
        title: "Die Spiele",
        type: "soundcloud",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1999017495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      },
    ]
  },
  {
    year: 2021,
    projects: [
      {
        title: "Iris",
        type: "bandcamp",
        embedUrl: "https://bandcamp.com/EmbeddedPlayer/track=3196078415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      }
    ]
  },
  {
    year: 2020,
    projects: [
      {
        title: "Electronic Crossovers @ Pera Museum Istanbul",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/tUUoY1ohCGs"
      }
    ]
  },
  {
    year: 2019,
    projects: [
      {
        title: "Haruyuki Suziki - Ringlet (World Premiere) Live in Tokyo",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/tAQzijswL4o"
      },
      {
        title: "Salda",
        type: "spotify",
        embedUrl: "https://open.spotify.com/embed/album/1AHF71sS4uD2ZIAeM1v599"
      },
      {
        title: "Ida",
        type: "spotify",
        embedUrl: "https://open.spotify.com/embed/album/3f5CoMIqMzGFCT5xF89FmG"
      }
    ]
  }
];

export default function Works() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <Navigation isVisible={isNavVisible} />
      <WorksContainer>
        <WorksHeader>Works</WorksHeader>
        <Timeline>
          {works.map(({ year, projects }) => (
            <YearSection key={year}>
              <Year>{year}</Year>
              {projects.map((project, index) => (
                <Project key={index}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <MediaContainer>
                    <EmbeddedMedia
                      src={project.embedUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </MediaContainer>
                </Project>
              ))}
            </YearSection>
          ))}
        </Timeline>
      </WorksContainer>
    </div>
  );
} 