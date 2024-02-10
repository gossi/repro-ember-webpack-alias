import Route from 'ember-polaris-routing/route';
import CompatRoute from 'ember-polaris-routing/route/compat';
import { HOME } from '@foo/home';
// import { Welcome } from '../components/welcome'; // <-- this works
import { Welcome } from '@foo/home'; // <-- this doesn't

export class ApplicationRoute extends Route<{}> {
  constructor(owner) {
    super(owner);

    console.log('Hi', HOME);

  }

  <template>
    <h1>Resolver Alias Test</h1>
    <Welcome />
    {{outlet}}
  </template>
}


export default CompatRoute(ApplicationRoute);
