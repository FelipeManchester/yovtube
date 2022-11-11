import React from 'react';
import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/TimeLine';

function HomePage() {
  const homePageStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };
  const [filterValue, setFilterValue] = React.useState('');

  return (
    <>
      <CSSReset />
      <div style={homePageStyles}>
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <TimeLine searchValue={filterValue} playlists={config.playlists}>
          Conteúdo
        </TimeLine>
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${config.bg});
  background-color: whitesmoke;
  background-size: cover;
  height: 230px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto-do-perfil"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} alt="Video thumb" />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
