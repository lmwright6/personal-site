
import * as React from 'react';
import {WatchableSubject, Watchable, useWatchable} from '@shortwave/watchable';
import styled from 'styled-components';

// Class counter example for React, but using Watchables (which is overkill here, but hey it's an example!)
class CounterService {
  private state = WatchableSubject.of(0);

  // Return a Watchable here as it's the readonly version.
  value(): Watchable<number> {
    return this.state;
  }

  increment(): void {
    this.state.update(this.state.getValue() + 1);
  }
}
// Class counter example for React, but using Watchables (which is overkill here, but hey it's an example!)
class BoolService {
  private state = WatchableSubject.of(false);

  // Return a Watchable here as it's the readonly version.
  value(): Watchable<boolean> {
    return this.state;
  }

  toggle(): void {
    this.state.update(!this.state.getValue());
  }
}

const AboutWrapper = styled.div`
    margin: 20px;
`;
const About = () => {
const service = React.useMemo(() => new CounterService(), []);
  const value = useWatchable(service.value());
  const boolService = React.useMemo(() => new BoolService(), []);
  const boolValue = useWatchable(boolService.value());
  return (
    <AboutWrapper>
      <p>
        {value === null ? 'Loading...' : `Counter value: ${value}`}
      </p>
      <p>
        <button onClick={() => service.increment()}>Click me!</button>
      </p>

      <p>
        {boolValue === null ? 'Loading...' : `Counter value: ${boolValue}`}
      </p>
      <p>
        <button onClick={() => boolService.toggle()}>Click me!</button>
      </p>
    </AboutWrapper>
  );
}

export default About;