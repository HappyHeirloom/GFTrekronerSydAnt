using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using GfTrekronerSyd.Models;
using GfTrekronerSyd.Services;
using Microsoft.Extensions.Options;

namespace GfTrekronerSyd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "GF Trekroner syd API",
                    Description = "A simple example ASP.NET Core Web API",
                    TermsOfService = new Uri("https://example.com/terms"),
                });
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin", builder => builder.AllowAnyOrigin());
                options.AddPolicy("AllowGetPost", builder => builder.AllowAnyOrigin().WithMethods("GET", "POST"));
            });

            // requires using Microsoft.Extensions.Options
            // NEWS
            services.Configure<NewsDatabaseSettings>(
                Configuration.GetSection(nameof(NewsDatabaseSettings)));

            services.AddSingleton<INewsDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<NewsDatabaseSettings>>().Value);

            services.AddSingleton<NewsService>();

            // ADMIN
            services.Configure<AdminDatabaseSettings>(
                Configuration.GetSection(nameof(AdminDatabaseSettings)));

            services.AddSingleton<IAdminDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<AdminDatabaseSettings>>().Value);

            services.AddSingleton<AdminService>();

            // EVENT
            services.Configure<EventDatabaseSettings>(
                Configuration.GetSection(nameof(EventDatabaseSettings)));

            services.AddSingleton<IEventDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<EventDatabaseSettings>>().Value);

            services.AddSingleton<EventService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("AllowAnyOrigin");
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Items API v1.0");
                c.RoutePrefix = string.Empty;
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}