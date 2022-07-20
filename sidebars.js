/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  tutorialSidebar: {
    'Getting Started': [
      'gettingstarted/introduction',
      'gettingstarted/authentication',
    ],
    
    Dicas: [
      'tips/blockednumber',
      'tips/enable-fix-number',
      'tips/disable-screem-blocked',
      'tips/android-active',
      'tips/stability',
      'tips/emulators',
    ],

    Instância: [
      'instance/introduction',
      'instance/update-auto-read-message',
      'instance/profile-picture',
      'instance/update-call-reject-auto',
      'instance/update-call-reject-message',
      'instance/qrcode',
      'instance/restore-session',
      'instance/restart',
      'instance/disconnect',
      'instance/status',
      'instance/device',
      'instance/rename-instance',
    ],
    Mensagens: [
      'message/introduction',
      'message/send-message-text',
      'message/forward-message',
      'message/send-message-reaction',
      'message/send-remove-reaction',
      'message/send-message-image',
      'message/send-message-sticker',
      'message/send-message-gif',
      'message/send-message-audio',
      'message/send-message-video',
      'message/send-message-document',
      'message/send-message-link',
      'message/send-message-location',
      /* 'send-message/send-message-product',
      'send-message/send-message-catalog',*/
      'message/send-message-contact',
      'message/send-button-actions',
      'message/send-button-list',
      'message/send-option-list',
      'message/delete-message',
      'message/read-message',
      'message/reply-message',
    ],
    Contatos: [
      'contacts/introduction',
      'contacts/get-contacts',
      'contacts/get-metadata-contact',
      'contacts/get-profile-picture',
      'contacts/get-iswhatsapp',
    ],
    Chats: [
      'chats/introduction',
      'chats/get-chats',
      'chats/get-message-chats',
      'chats/get-metadata-chat',
      'chats/read-chat',
      'chats/archive-chat',
      'chats/delete-chat',
    ],
    Grupos: [
      'group/introduction',
      'group/create-group',
      'group/update-group-name',
      'group/update-group-photo',
      'group/add-participant',
      'group/remove-participant',
      'group/mention-participant',
      'group/add-admin',
      'group/remove-admin',
      'group/leave-group',
      'group/metadata-group',
      'group/group-invitation-metadata',
      'group/update-group-settings',
      'group/update-group-description',
    ],
    'Lista de Transmissão': ['broadcast/introduction'],
    Status: [
      'status/introduction',
      'status/send-text-status',
      'status/send-image-status',
    ],
    'Fila de Mensagens': [
      'queue/introduction',
      'queue/get-queue',
      'queue/delete-queue',
      'queue/delete-queue-id',
    ],
    'Whatsapp Business': [
      'business/introduction',
      'business/edit-product',
      'business/get-products',
      'business/get-products-phone',
      'business/get-product-id',
      'business/tags',
      'business/tags-add',
      'business/tags-remove',
      'business/delete-product',
    ],
    Webhooks: [
      'webhooks/introduction',
      'webhooks/on-message-send',
      'webhooks/on-message-received',
      'webhooks/on-message-received-notify-fromme',
      'webhooks/on-whatsapp-disconnected',
      'webhooks/on-whatsapp-message-status-changes',
      'webhooks/on-chat-presence',
      'webhooks/on-webhook-connected',
    ],
    /*
    Parceiros: [
      'partner/introduction',
      'partner/create-instance',
      'partner/sign-instance',
      'partner/unsubscribe-instance',
    ],

    Integradores: ['integrators/find-my-pack'],
*/
    'Multi-Devices': ['multidevices/introduction', 'multidevices/beta'],
    /*
    Sample: ['sample/exemplos'],
    */
  },
};
