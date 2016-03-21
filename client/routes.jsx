AccountsTemplates.configure({
  defaultLayoutType: 'blaze-to-react',
  defaultLayout: MainLayout,
  defaultLayoutRegions: {},
  defaultContentRegion: 'content'
});

AccountsTemplates.configureRoute('signIn', {
  layoutRegions: {
    title: 'Sign In'
  }
});
AccountsTemplates.configureRoute('signUp', {
  layoutRegions: {
    title: 'Sign Up'
  }
});

FlowRouter.route('/', {
  action(){
    ReactLayout.render(MainLayout, {content: <App />});
  }
});
