using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFinder.Entities
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        public DbSet<User> User { get; set; }
        public DbSet<Vehicle> Vehicle { get; set; }
        public DbSet<Event> Event { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //User
            modelBuilder.Entity<User>()
                .Property(phone => phone.PhoneNumber)
                .HasMaxLength(13);

            modelBuilder.Entity<User>()
                .Property(admin => admin.IsAdmin)
                .HasDefaultValue(0);

            modelBuilder.Entity<User>()
                .HasIndex(usrname => usrname.UserName)
                .IsUnique();

            modelBuilder.Entity<User>(strnumber => strnumber.HasCheckConstraint("CK_User_StreetNumber", "StreetNumber >= 1"));

            //Vehicle
            modelBuilder.Entity<Vehicle>(price => price.HasCheckConstraint("CK_Vehicle_Price", "VehiclePrice >= 0"));

            modelBuilder.Entity<Vehicle>(fabyear => fabyear.HasCheckConstraint("CK_Vehicle_Fabrication_Year", "VehicleFabricationYear >= 1875"));

            modelBuilder.Entity<Vehicle>(km => km.HasCheckConstraint("CK_Vehicle_Km", "VehicleKM >= 0"));

            modelBuilder.Entity<Vehicle>(power => power.HasCheckConstraint("CK_Vehicle_Power", "VehiclePower >= 1"));

            modelBuilder.Entity<Vehicle>(doors => doors.HasCheckConstraint("CK_Vehicle_Doors", "VehicleDoors >= 0"));

            modelBuilder.Entity<Vehicle>(capacity => capacity.HasCheckConstraint("CK_Vehicle_Capacity", "VehicleCapacity >= 1"));

            modelBuilder.Entity<Vehicle>(warranty => warranty.HasCheckConstraint("CK_Vehicle_Warranty", "VehicleWarranty >= 0"));

            modelBuilder.Entity<Vehicle>()
                .HasOne(usr => usr.User)
                .WithMany(usr => usr.Vehicles)
                .HasForeignKey(usr => usr.UserID)
                .OnDelete(DeleteBehavior.Cascade);

            //Event
            modelBuilder.Entity<Event>()
                .HasOne(vh => vh.Vehicle)
                .WithMany(vh => vh.Events)
                .HasForeignKey(vh => vh.VehicleID)
                .OnDelete(DeleteBehavior.Cascade);

        }

    }
}
