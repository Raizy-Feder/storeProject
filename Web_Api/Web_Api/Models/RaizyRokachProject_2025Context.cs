using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Web_Api.Models
{
    public partial class RaizyRokachProject_2025Context : DbContext
    {
        public RaizyRokachProject_2025Context()
        {
        }

        public RaizyRokachProject_2025Context(DbContextOptions<RaizyRokachProject_2025Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<Shopping> Shoppings { get; set; } = null!;
        public virtual DbSet<ShppingDetail> ShppingDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=kitotSrv\\sql;Database=RaizyRokachProject_2025;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CategoryCode)
                    .HasName("PK__Category__371BA954A0B1A3BD");

                entity.Property(e => e.CategoryName).HasMaxLength(10);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustCode)
                    .HasName("PK__Customer__4D554DC153C033DE");

                entity.Property(e => e.CreditInformation).HasMaxLength(23);

                entity.Property(e => e.CustName).HasMaxLength(20);

                entity.Property(e => e.Pass).HasMaxLength(10);
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.HasKey(e => e.GameCode)
                    .HasName("PK__Games__18C8460DEA9136C4");

                entity.Property(e => e.CategoryCode).HasColumnName("categoryCode");

                entity.Property(e => e.GameName).HasMaxLength(20);

                entity.Property(e => e.Img)
                    .HasColumnType("image")
                    .HasColumnName("img");

                entity.HasOne(d => d.CategoryCodeNavigation)
                    .WithMany(p => p.Games)
                    .HasForeignKey(d => d.CategoryCode)
                    .HasConstraintName("FK__Games__categoryC__412EB0B6");
            });

            modelBuilder.Entity<Shopping>(entity =>
            {
                entity.HasKey(e => e.ShoppingCode)
                    .HasName("PK__Shopping__97FFACF3D6DE0062");

                entity.ToTable("Shopping");

                entity.Property(e => e.ShoppingDate).HasColumnType("date");

                entity.HasOne(d => d.CustCodeNavigation)
                    .WithMany(p => p.Shoppings)
                    .HasForeignKey(d => d.CustCode)
                    .HasConstraintName("FK__Shopping__CustCo__4316F928");
            });

            modelBuilder.Entity<ShppingDetail>(entity =>
            {
                entity.HasKey(e => e.ShoppingDetailsCode)
                    .HasName("PK__ShppingD__244B2A03287E30E0");

                entity.HasOne(d => d.GameCodeNavigation)
                    .WithMany(p => p.ShppingDetails)
                    .HasForeignKey(d => d.GameCode)
                    .HasConstraintName("FK__ShppingDe__GameC__403A8C7D");

                entity.HasOne(d => d.ShoppingCodeNavigation)
                    .WithMany(p => p.ShppingDetails)
                    .HasForeignKey(d => d.ShoppingCode)
                    .HasConstraintName("FK__ShppingDe__Shopp__3F466844");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
