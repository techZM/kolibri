import { PageNames } from '../../constants';

export function showChatsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS);
  // the dummy data is based on that the current user is bob
  const dummyThreads = [
    {
      id: 'ed685aa460d346f1af1a7423226bfdea',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'Direct message with tommy',
      deleted: false,
      participants: ['1e96a0124f4352e8a01d1f9e0c5d3d20', 'ec8fb0259293ac3acf74162e02d927f5'],
      messages: [
        {
          id: '6f74e4618b2e4fc3af249ba638dd30ec',
          message: 'Hi',
          sentTime: '2018-01-23T16:43:47.283553-08:00',
          opened: true,
          file: null,
          thread: 'ed685aa460d346f1af1a7423226bfdea',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
        {
          id: '3236827654844aad974a110880c09d3b',
          message: 'Hello',
          sentTime: '2018-01-23T16:45:59.750275-08:00',
          opened: false,
          file: null,
          thread: 'ed685aa460d346f1af1a7423226bfdea',
          senderinfo: {
            username: 'tommy',
            id: 'ec8fb0259293ac3acf74162e02d927f5',
            full_name: 'tommy b',
          },
        },
      ],
      unread_count: 1,
    },
    {
      id: '41936969e5af485295f74672303afe6c',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'math class',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: '3047280e2b464d35baabf6df235101f8',
          message: 'We have a math class',
          sentTime: '2018-01-23T22:31:19.726361-08:00',
          opened: false,
          file: null,
          thread: '41936969e5af485295f74672303afe6c',
          senderinfo: {
            username: 'tommy',
            id: 'ec8fb0259293ac3acf74162e02d927f5',
            full_name: 'tommy b',
          },
        },
        {
          id: '4549191851184ab59c488c826c721c70',
          message: 'And an exam',
          sentTime: '4549191851184ab59c488c826c721c70',
          opened: false,
          file: null,
          thread: '41936969e5af485295f74672303afe6c',
          senderinfo: {
            username: 'daniel',
            id: '996c671df343aa8483ad4f05c6d46c1b',
            full_name: 'daniel c',
          },
        },
      ],
      unread_count: 2,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}

export function openChat(store, chatId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS_OPEN);
  const dummyThreads = [
    {
      id: 'ed685aa460d346f1af1a7423226bfdea',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'Direct message with tommy',
      deleted: false,
      participants: ['1e96a0124f4352e8a01d1f9e0c5d3d20', 'ec8fb0259293ac3acf74162e02d927f5'],
      messages: [
        {
          id: '6f74e4618b2e4fc3af249ba638dd30ec',
          message: 'Hi',
          sentTime: '2018-01-23T16:43:47.283553-08:00',
          opened: true,
          file: null,
          thread: 'ed685aa460d346f1af1a7423226bfdea',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
        {
          id: '3236827654844aad974a110880c09d3b',
          message: 'Hello',
          sentTime: '2018-01-23T16:45:59.750275-08:00',
          opened: false,
          file: null,
          thread: 'ed685aa460d346f1af1a7423226bfdea',
          senderinfo: {
            username: 'tommy',
            id: 'ec8fb0259293ac3acf74162e02d927f5',
            full_name: 'tommy b',
          },
        },
      ],
      unread_count: 1,
    },
    {
      id: '41936969e5af485295f74672303afe6c',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'math class',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: '3047280e2b464d35baabf6df235101f8',
          message: 'We have a math class',
          sentTime: '2018-01-23T22:31:19.726361-08:00',
          opened: false,
          file: null,
          thread: '41936969e5af485295f74672303afe6c',
          senderinfo: {
            username: 'tommy',
            id: 'ec8fb0259293ac3acf74162e02d927f5',
            full_name: 'tommy b',
          },
        },
        {
          id: '4549191851184ab59c488c826c721c70',
          message: 'And an exam',
          sentTime: '4549191851184ab59c488c826c721c70',
          opened: false,
          file: null,
          thread: '41936969e5af485295f74672303afe6c',
          senderinfo: {
            username: 'daniel',
            id: '996c671df343aa8483ad4f05c6d46c1b',
            full_name: 'daniel c',
          },
        },
      ],
      unread_count: 2,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  const dummyCurrentThread = {
    id: chatId,
    creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
    title: 'Direct message with tommy',
    deleted: false,
    participants: ['1e96a0124f4352e8a01d1f9e0c5d3d20', 'ec8fb0259293ac3acf74162e02d927f5'],
    messages: [
      {
        id: '6f74e4618b2e4fc3af249ba638dd30ec',
        message: 'Hi',
        sentTime: '2018-01-23T16:43:47.283553-08:00',
        opened: true,
        file: null,
        thread: 'ed685aa460d346f1af1a7423226bfdea',
        senderinfo: {
          username: 'bob',
          id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
          full_name: 'bob a',
        },
      },
      {
        id: '3236827654844aad974a110880c09d3b',
        message: 'Hello',
        sentTime: '2018-01-23T16:45:59.750275-08:00',
        opened: false,
        file: null,
        thread: 'ed685aa460d346f1af1a7423226bfdea',
        senderinfo: {
          username: 'tommy',
          id: 'ec8fb0259293ac3acf74162e02d927f5',
          full_name: 'tommy b',
        },
      },
    ],
    unread_count: 1,
  };
  store.dispatch('SET_CURRENT_THREAD', dummyCurrentThread);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function showAlertsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS);
  const dummyThreads = [
    {
      id: 'cb3dd58d6cdf44aca1ee50180b2115ed',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'no classes tomorrow',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: 'bab4589db0224eaeaa16bb94595135d7',
          message: "Don't come to school",
          sentTime: '2018-01-23T22:30:53.983114-08:00',
          opened: true,
          file: null,
          thread: 'cb3dd58d6cdf44aca1ee50180b2115ed',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
    {
      id: '50fde30374e842fbaf91ac8cc215ef78',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'hackathon today',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: '3047280e2b464d35baabf6df235101f8',
          message: 'Yay',
          sentTime: '2018-01-24T00:40:58.273444-08:00',
          opened: true,
          file: null,
          thread: '50fde30374e842fbaf91ac8cc215ef78',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function openAlert(store, alertId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS_OPEN);
  const dummyThreads = [
    {
      id: 'cb3dd58d6cdf44aca1ee50180b2115ed',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'no classes tomorrow',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: 'bab4589db0224eaeaa16bb94595135d7',
          message: "Don't come to school",
          sentTime: '2018-01-23T22:30:53.983114-08:00',
          opened: true,
          file: null,
          thread: 'cb3dd58d6cdf44aca1ee50180b2115ed',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
    {
      id: '50fde30374e842fbaf91ac8cc215ef78',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'hackathon today',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: '3047280e2b464d35baabf6df235101f8',
          message: 'Yay',
          sentTime: '2018-01-24T00:40:58.273444-08:00',
          opened: true,
          file: null,
          thread: '50fde30374e842fbaf91ac8cc215ef78',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  const dummyCurrentThread = {
    id: alertId,
    creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
    title: 'hackathon today',
    deleted: false,
    participants: [
      '1e96a0124f4352e8a01d1f9e0c5d3d20',
      'ec8fb0259293ac3acf74162e02d927f5',
      '996c671df343aa8483ad4f05c6d46c1b',
    ],
    messages: [
      {
        id: '3047280e2b464d35baabf6df235101f8',
        message: 'Yay',
        sentTime: '2018-01-24T00:40:58.273444-08:00',
        opened: true,
        file: null,
        thread: '50fde30374e842fbaf91ac8cc215ef78',
        senderinfo: {
          username: 'bob',
          id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
          full_name: 'bob a',
        },
      },
    ],
    unread_count: 0,
  };
  store.dispatch('SET_CURRENT_THREAD', dummyCurrentThread);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}
