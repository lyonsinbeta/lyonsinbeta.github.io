---
title: Refactoring with Class
author: David
layout: post
permalink: /2013/10/refactoring-with-class/
categories:
  - Uncategorized
tags:
  - dev
  - ruby
---
If you ever want to know if you're making progress on a skill, go back and look at your earlier work compared to your recent stuff. I was reviewing some of my old scripts on Github and I was surprised how simple and linear they are. They got the job done, but only just barely...



Now I'm not a full time coder, so I haven't exactly gone pro since then, but I have moved from the ultra simple scripts of yore, to more intelligently formatted and reusable code.

Oh and classes, classes are cool.

Let's look at a script I wrote not that long ago. It concatenates some CSV files together and gets them into the format I need them.

    require 'csv'
    
    courses = "courses.csv"
    
    altered = []
    
    CSV.foreach(courses, { :headers => true, :header_converters => :symbol }) do |course|
      altered << course.headers unless altered.size > 0
      course[:start_date] += "T01:00:01-6:00" unless course[:start_date].match(/T\d\d:\d\d:\d\d-/)
      course[:end_date] += "T22:59:59-6:00" unless course[:end_date].match(/T\d\d:\d\d:\d\d-/)
      altered << course
    end
    
    CSV.open(courses, "w+") do |csv|
      altered.each do |row|
        csv << row
      end
    end
    
    teachers = "enrollments_t.csv"
    students = "enrollments.csv"
    
    CSV.open(students, "a") do |csv|
      CSV.foreach(teachers, { :headers => true, :header_converters => :symbol }) do |teacher|
        csv << teacher
      end
    end
    
    sections = "sections.csv"
    
    altered = []
    
    CSV.foreach(sections, { :headers => true, :header_converters => :symbol }) do |section|
      altered << section.headers unless altered.size > 0
      section[:start_date] = ""
      section[:end_date] = ""
      altered << section
    end
    
    CSV.open(sections, "w+") do |csv|
      altered.each do |row|
        csv << row
      end
    end
    
    teachers = "users_t.csv"
    students = "users.csv"
    
    CSV.open(students, "a") do |csv|
      CSV.foreach(teachers, { :headers => true, :header_converters => :symbol }) do |teacher|
        csv << teacher
      end
    end
    

Oh the horror. It does the job, but it has a lot of smells (and probably more then I even realize.) The most obvious is the duplication. Second (but related) is the *complete* lack of functions; if I need to concatenate more than just the four files I'd have to extend the script each time. Next is the most up to date version.

    require 'csv'
    
    FILE_TYPES = ["courses", "sections", "users", "enrollments"]
    
    class CSVFixer
    
      attr_reader :rows
    
      def initialize(csvs_name)
        @csvs, @rows = [], []
        @csvs_name   = csvs_name
        @csvs        = get_csvs
        read_csvs(@csvs)
      end
    
      def get_csvs
        @csvs = Dir.glob("csvs/*#{@csvs_name}*", File::FNM_CASEFOLD)
      end
    
      def read_csvs(csvs)
        csvs.each do |csv|
          CSV.foreach(csv, { :headers           => true, 
                             :header_converters => :symbol, 
                             :encoding          => "windows-1251:utf-8" }) do |row|
            @rows << row
          end
        end
      end
    
      def write_csvs(folder, file_name)
        CSV.open("#{folder}/#{file_name}.csv", "w", 
                 :write_headers => true, :headers => @rows[0].headers) do |csv|
          @rows.each do |row|
            remove_section_dates(row) if file_name == "sections"
            extend_course_end_date(row) if file_name == "courses" && row[:end_date] == "2013-12-14"
            csv << row
          end
        end
      end
    
      def remove_section_dates(row)
        row[:start_date] = ""
        row[:end_date]   = ""
      end
    
      def extend_course_end_date(row)
        # Horrible magic number change for Fall 2013
        row[:end_date] = "2013-12-25"
      end
    end
    
    def make_folder
      folder_name = Time.now.strftime("%Y-%m-%d %H%M%S")
      while File.exists?(folder_name)
        sleep 1
        folder_name = Time.now.strftime("%Y-%m-%d %H%M%S")
      end
    
      Dir::mkdir(folder_name)
    
      return folder_name
    end
    
    output = make_folder
    
    FILE_TYPES.each do |type|
      fix = CSVFixer.new(type)
      next if fix.rows.empty?
      fix.write_csvs(output, type)
      puts "Processed #{fix.rows.length} rows for #{type}.csv"
    end
    

So this version is 20 lines longer, but it adds so much goodness in those 20 lines. First, a class is used to declare and make accessible the commonly needed functions, and a CONSTANT holds the names of files (that are now DIR::glob-ed for). This means that I can now make the entire tool also process groups.csv but just adding `"groups"` to the `FILE_TYPES` array. I can also concatenate any number of partial files, so if I have users.csv, users1.csv, users2.csv **and** users3.csv, it will read in all the lines and cram them into one (UTF-8!!) file.

This little tool still isn't perfect. It assumes the files are formatted correctly (they come from a machine source so that's fairly likely) and it does use a magic number, but all in all it's infinitely more extensible and reusable the the original iteration.

The time I spent writing this little utility didn't just save me many hours of boring (and error prone) manual concatenation of files, but my coworkers got to benefit from using it while I was away from the office.
