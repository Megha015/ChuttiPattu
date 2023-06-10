export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string', options: {maxLength: 40}},
    {name: 'phone', title: 'Phone', type: 'string', options: {maxLength: 15}},
    {name: 'message', title: 'Message', type: 'string'},
  ],
}
