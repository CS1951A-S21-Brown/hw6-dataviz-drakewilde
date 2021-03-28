import csv

###Graph 2: Analysis
storage = []
genre_dict = {
    "Puzzle": [0.0, 0.0, 0.0],
    "Strategy": [0.0, 0.0, 0.0],
    "Fighting": [0.0, 0.0, 0.0],
    "Simulation": [0.0, 0.0, 0.0],
    "Platform": [0.0, 0.0, 0.0],
    "Racing": [0.0, 0.0, 0.0],
    "Adventure": [0.0, 0.0, 0.0],
    "Shooter": [0.0, 0.0, 0.0],
    "Role-Playing": [0.0, 0.0, 0.0],
    "Misc": [0.0, 0.0, 0.0],
    "Sports": [0.0, 0.0, 0.0],
    "Action": [0.0, 0.0, 0.0],
    }
#For each genre: [NA, EU, JP]
Region_list = [['NA', 0.0], ['EU', 0.0], ['JP', 0.0]]
#[NA, EU, JP], where each region value is a genre


with open("data/video_games.csv") as csv_file:
    
    csv_reader = csv.reader(csv_file, delimiter=',')
    next(csv_reader)
    #Populate dictionary
    for row in csv_reader:
        genre = row[4]
        na_sales = row[6]
        eu_sales = row[7]
        jp_sales = row[8]
        
        dict_list = genre_dict[genre]
        
        new_na = dict_list[0] + float(na_sales)
        new_eu = dict_list[1] + float(eu_sales)
        new_jp = dict_list[2] + float(jp_sales)
        
        genre_dict[genre] = [new_na, new_eu, new_jp]

    #Dict to 2-d List
    for key, value in genre_dict.items():
        temp = [key, value[0], value[1], value[2]]
        storage.append(temp)
    
    #Determine most popular genre in each region
    na_max = 0.0
    eu_max = 0.0
    jp_max = 0.0
    for g in storage:       
        row_genre = g[0]
        row_sales_na = g[1]
        row_sales_eu = g[2]
        row_sales_jp = g[3]
        
        if row_sales_na >= na_max:
            na_max = row_sales_na
            Region_list[0][0] = row_genre
            Region_list[0][1] = row_sales_na
            
        if row_sales_eu >= eu_max:
            eu_max = row_sales_eu
            Region_list[1][0] = row_genre
            Region_list[1][1] = row_sales_eu
            
        if row_sales_jp >= jp_max:
            jp_max = row_sales_jp
            Region_list[2][0] = row_genre
            Region_list[2][1] = row_sales_jp
    


with open("data/video_games_graph2.csv", "w", newline='') as out_file:
    writer = csv.writer(out_file, delimiter=',')
    writer.writerow(['Region', 'Genre', 'Sales'])
    writer.writerow(['NA', Region_list[0][0], Region_list[0][1]])
    writer.writerow(['EU', Region_list[1][0], Region_list[1][1]])
    writer.writerow(['JP', Region_list[2][0], Region_list[2][1]])

    
    
        



        

