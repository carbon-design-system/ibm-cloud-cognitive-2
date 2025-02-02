/**
 * @file Header stories.
 * @copyright IBM Security 2018
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

import { disableCenteredStories, patterns } from '../../../.storybook';

import Header from './';

import {
  labels,
  links,
  accounts,
  notifications,
  profile,
  profileWithAccount,
  profileWithAccountLongName,
} from './_mocks_';

import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

const headerProps = {
  labels,
  links,
};

disableCenteredStories(storiesOf(patterns('Header#legacy'), module))
  .addDecorator((Story) => (
    <>
      <Grid>
        <Story />
      </Grid>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://react.carbondesignsystem.com/?path=/story/components-ui-shell--header-base-w-actions"
            rel="noopener noreferrer"
            target="_blank"
          >
            View replacement
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Pattern no longer supported. The pattern will remain available, but plan to migrate to the pattern replacement."
        title=""
        hideCloseButton
        style={{ display: 'block' }}
      />
    </>
  ))
  .add('default', () => <Header {...headerProps} />, {
    info: {
      text: `
          Basic implementation of the header.
        `,
    },
  })
  .add(
    'with active user',
    () => <Header {...headerProps} profile={object('profile', profile)} />,
    {
      info: {
        text: `
          Basic implementation of the header when a user is active.
        `,
      },
    }
  )
  .add(
    'with notifications',
    () => (
      <Header
        {...headerProps}
        notifications={notifications}
        onNotificationClear={action('onNotificationClear')}
        profile={object('profile', profile)}
        totalNotifications={307}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with notifications.
        `,
      },
    }
  )
  .add(
    'with profile account',
    () => (
      <Header
        {...headerProps}
        onAccountClick={action('onAccountClick')}
        profile={object('profile', profileWithAccount)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with accounts.
        `,
      },
    }
  )
  .add(
    'with account list',
    () => (
      <Header
        {...headerProps}
        accounts={object('accounts', accounts)}
        onAccountClick={action('onAccountClick')}
        profile={object('profile', profileWithAccount)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with accounts.
        `,
      },
    }
  )
  .add(
    'with account list and long account name',
    () => (
      <Header
        {...headerProps}
        accounts={object('accounts', accounts)}
        onAccountClick={action('onAccountClick')}
        profile={object('profile', profileWithAccountLongName)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with accounts that have long truncated names.
        `,
      },
    }
  );
