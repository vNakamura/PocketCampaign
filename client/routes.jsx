AccountsTemplates.configure({
  defaultLayoutType: 'blaze-to-react',
  defaultLayout: MainLayout,
  defaultLayoutRegions: {},
  defaultContentRegion: 'content'
});

AccountsTemplates.configureRoute('signIn');

FlowRouter.route('/', {
  action(){
    ReactLayout.render(MainLayout, {content: <App />});
  }
});
