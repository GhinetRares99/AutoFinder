using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFinder.Entities
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required] 
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required, MinLength(5)]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        //Location
        [Required]
        public string StreetName { get; set; }

        [Required]
        public int StreetNumber { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string StateProvince { get; set; }

        [Required]
        public string Country { get; set; }

        //Other
        [Required]
        public bool IsAdmin { get; set; }

        public virtual ICollection<Vehicle> Vehicles { get; set; }

    }
}
