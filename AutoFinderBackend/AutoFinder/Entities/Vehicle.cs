using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFinder.Entities
{
    public class Vehicle
    {
        [Key]
        public int VehicleID { get; set; }

        [Required]
        public string VehicleCategory { get; set; }

        [Required]
        public string VehicleCompany { get; set; }

        [Required]
        public string VehicleModel { get; set; }

        [Required]
        public int VehiclePrice { get; set; }

        [Required]
        public int VehicleFabricationYear { get; set; }

        [Required]
        public string VehicleFuelType { get; set; }

        [Required]
        public int VehicleKM { get; set; }

        [Required]
        public int VehiclePower { get; set; }

        [Required]
        public int VehicleCapacity { get; set; }

        [Required]
        public string VehicleTransmission { get; set; }

        [Required]
        public string VehiclePollutionNorm { get; set; }

        [Required]
        public int VehicleDoors { get; set; }

        [Required]
        public string VehicleColor { get; set; }

        [Required]
        public int VehicleWarranty { get; set; }

        [Required]
        public string VehicleOriginCountry { get; set; }

        [Required]
        public DateTime VehicleFirstRegistration { get; set; }

        [Required]
        public string VehicleRegistered { get; set; }

        [Required]
        public string VehicleThumbnail { get; set; }

        [Required]
        public string VehiclePhoto1 { get; set; }

        public string VehiclePhoto2 { get; set; }

        public string VehiclePhoto3 { get; set; }

        [Required]
        public int UserID { get; set; }

        public virtual User User { get; set; }

        public virtual ICollection<Event> Events { get; set; }



    }
}

