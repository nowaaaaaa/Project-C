// <auto-generated />
using System;
using Backend.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20230111224037_Viscondb5")]
    partial class Viscondb5
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("EF")
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Backend.EF.AckProblem", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("MachineTypeId")
                        .HasColumnType("uuid");

                    b.Property<string>("problem")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("solution")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("MachineTypeId");

                    b.ToTable("ackProblems", "EF");
                });

            modelBuilder.Entity("Backend.EF.Company", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("companies", "EF");
                });

            modelBuilder.Entity("Backend.EF.Machine", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("companyId")
                        .HasColumnType("uuid");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("typeId")
                        .HasColumnType("uuid");

                    b.HasKey("id");

                    b.HasIndex("companyId");

                    b.HasIndex("typeId");

                    b.ToTable("machines", "EF");
                });

            modelBuilder.Entity("Backend.EF.MachineType", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("drawingNr")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("machineTypes", "EF");
                });

            modelBuilder.Entity("Backend.EF.Ticket", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("handlerId")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("solveDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("solved")
                        .HasColumnType("boolean");

                    b.Property<DateTime>("submitDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("submitterId")
                        .HasColumnType("uuid");

                    b.HasKey("id");

                    b.HasIndex("handlerId");

                    b.HasIndex("submitterId");

                    b.ToTable("tickets", "EF");
                });

            modelBuilder.Entity("Backend.EF.TicketDetails", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("expected")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("problem")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("solution")
                        .HasColumnType("text");

                    b.Property<Guid>("ticketId")
                        .HasColumnType("uuid");

                    b.HasKey("id");

                    b.HasIndex("ticketId");

                    b.ToTable("ticketDetails", "EF");
                });

            modelBuilder.Entity("Backend.EF.User", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("companyId")
                        .HasColumnType("uuid");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<byte[]>("passwordHash")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<byte[]>("passwordSalt")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("role")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("companyId");

                    b.ToTable("users", "EF");
                });

            modelBuilder.Entity("Backend.EF.AckProblem", b =>
                {
                    b.HasOne("Backend.EF.MachineType", "type")
                        .WithMany()
                        .HasForeignKey("MachineTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("type");
                });

            modelBuilder.Entity("Backend.EF.Machine", b =>
                {
                    b.HasOne("Backend.EF.Company", "company")
                        .WithMany("machines")
                        .HasForeignKey("companyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.EF.MachineType", "type")
                        .WithMany()
                        .HasForeignKey("typeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("company");

                    b.Navigation("type");
                });

            modelBuilder.Entity("Backend.EF.Ticket", b =>
                {
                    b.HasOne("Backend.EF.User", "handler")
                        .WithMany()
                        .HasForeignKey("handlerId");

                    b.HasOne("Backend.EF.User", "submitter")
                        .WithMany()
                        .HasForeignKey("submitterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("handler");

                    b.Navigation("submitter");
                });

            modelBuilder.Entity("Backend.EF.TicketDetails", b =>
                {
                    b.HasOne("Backend.EF.Ticket", "ticket")
                        .WithMany()
                        .HasForeignKey("ticketId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ticket");
                });

            modelBuilder.Entity("Backend.EF.User", b =>
                {
                    b.HasOne("Backend.EF.Company", "company")
                        .WithMany()
                        .HasForeignKey("companyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("company");
                });

            modelBuilder.Entity("Backend.EF.Company", b =>
                {
                    b.Navigation("machines");
                });
#pragma warning restore 612, 618
        }
    }
}
