using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ChasTeknisktTest.Startup))]
namespace ChasTeknisktTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
