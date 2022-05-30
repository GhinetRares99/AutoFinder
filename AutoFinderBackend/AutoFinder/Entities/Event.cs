using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFinder.Entities
{
    public class Event
    {
        [Key]
        public int EventID { get; set; }

        [Required]
        public int VehicleID { get; set; }

        [Required]
        public string EventDescription { get; set; }

        [Required]
        public DateTime EventDate { get; set; }

        public virtual Vehicle Vehicle { get; set; }
    }
}
