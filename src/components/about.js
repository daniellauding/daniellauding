import React from 'react';
import classNames from 'classnames';
import Avatar from './avatar';
import Profile from './profile';
import Experiences from './experiences';

// Hur tar jag reda på vad som körs, för att ta bort och förenkla kod?

const About = ({ previewCase, setPreviewCase, active, selectedChanged, clearPreview }) => {
  // const [active, setActive] = useState(null);

  return (
    <>
      <Avatar previewCase={previewCase} selectedChanged={selectedChanged} active={active} />

      <div
        className={classNames(
          'content align-center',
          active ? 'justify-start' : 'md:w-1/2 flex md:flex-col justify-center'
        )}
        onMouseEnter={clearPreview}>
        <div className="md:overflow-y-scroll md:h-100 py-8">
          <Profile />
          <Experiences
            selectedChanged={selectedChanged}
            setPreviewCase={setPreviewCase}
            active={active}
            previewCase={previewCase}
          />
        </div>
      </div>
    </>
  );
};

export default About;
