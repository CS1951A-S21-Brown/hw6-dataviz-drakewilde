import csv

###Graph 3: Analysis

puzzle_list = []
strategy_list = []
fighting_list = []
simulation_list = []
platformer_list = []
racing_list = []
advneture_list = []
shooter_list = []
rp_list = []
misc_list = []
sports_list = []
action_list = []

publisher_list = []

with open("data/video_games.csv") as csv_file:
    
    csv_reader = csv.reader(csv_file, delimiter=',')
    next(csv_reader)
    
    for row in csv_reader:
        publisher = row[5]
        publisher_list.append(publisher)
    
    publisher_list_unique = list(set(publisher_list))
    list_of_zeros = [0] * len(publisher_list_unique)
    
    publisher_dict = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict1 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict2 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict3 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict4 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict5 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict6 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict7 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict8 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict9 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict10 = dict(zip(publisher_list_unique, list_of_zeros))
    publisher_dict11 = dict(zip(publisher_list_unique, list_of_zeros))
    
    puzzle_list = [publisher_dict]
    strategy_list = [publisher_dict1]
    fighting_list = [publisher_dict2]
    simulation_list = [publisher_dict3]
    platformer_list = [publisher_dict4]
    racing_list = [publisher_dict5]
    adventure_list = [publisher_dict6]
    shooter_list = [publisher_dict7]
    rp_list = [publisher_dict8]
    misc_list = [publisher_dict9]
    sports_list = [publisher_dict10]    
    action_list = [publisher_dict11]
    
    csv_file.close()

with open("data/video_games.csv") as csv_file2:
    
    csv_reader2 = csv.reader(csv_file2, delimiter=',')
    next(csv_reader2)
    
    for row in csv_reader2:
        genre = row[4]
        global_sales = row[10]
        publisher = row[5]
        
        if genre == "Puzzle":
            pub_dict = puzzle_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
        
        if genre == "Strategy":
            pub_dict1 = strategy_list[0]
            pub_dict1[publisher] = pub_dict1[publisher] + float(global_sales)
            
        if genre == "Fighting":
            pub_dict = fighting_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
            
        if genre == "Simulation":
            pub_dict = simulation_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
            
        if genre == "Platform":
            pub_dict = platformer_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
        
        if genre == "Racing":
            pub_dict = racing_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
        
        if genre == "Adventure":
            pub_dict = adventure_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
    
        if genre == "Shooter":
            pub_dict = shooter_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
   
        if genre == "Role-Playing":
            pub_dict = rp_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
    
        if genre == "Misc":
            pub_dict = misc_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
    
        if genre == "Sports":
            pub_dict = sports_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
    
        if genre == "Action":
            pub_dict = action_list[0]
            pub_dict[publisher] = pub_dict[publisher] + float(global_sales)
    
    

    puzzle_results = sorted(puzzle_list[0], key=puzzle_list[0].get, reverse=True)   
    storage_1 = []
    for i in range(3):
        puzzle_key = puzzle_results[i]
        puzzle_val = puzzle_list[0][puzzle_key]
        storage_1.append((puzzle_key, puzzle_val))
    print("PUZZLE")
    print(storage_1)
    
    strategy_results = sorted(strategy_list[0], key=strategy_list[0].get, reverse=True)   
    storage_2 = []
    for i in range(3):
        strat_key = strategy_results[i]
        strat_val = strategy_list[0][strat_key]
        storage_2.append((strat_key, strat_val))
    print("STRATEGY")
    print(storage_2)

    fighting_results = sorted(fighting_list[0], key=fighting_list[0].get, reverse=True)   
    storage_3 = []
    for i in range(3):
        fight_key = fighting_results[i]
        fight_val = fighting_list[0][fight_key]
        storage_3.append((fight_key, fight_val))
    print("FIGHTING")
    print(storage_3)
    
    sim_results = sorted(simulation_list[0], key=simulation_list[0].get, reverse=True)   
    storage_4 = []
    for i in range(3):
        sim_key = sim_results[i]
        sim_val = simulation_list[0][sim_key]
        storage_4.append((sim_key, sim_val))
    print("SIMULATION")
    print(storage_4)

    platformer_results = sorted(platformer_list[0], key=platformer_list[0].get, reverse=True)   
    storage_5 = []
    for i in range(3):
        platformer_key = platformer_results[i]
        platformer_val = platformer_list[0][platformer_key]
        storage_5.append((platformer_key, platformer_val))
    print("PLATFORMER")
    print(storage_5)
    
    racing_results = sorted(racing_list[0], key=racing_list[0].get, reverse=True)   
    storage_6 = []
    for i in range(3):
        racing_key = racing_results[i]
        racing_val = racing_list[0][racing_key]
        storage_6.append((racing_key, racing_val))
    print("RACING")
    print(storage_6)

    adventure_results = sorted(adventure_list[0], key=adventure_list[0].get, reverse=True)   
    storage_7 = []
    for i in range(3):
        adventure_key = adventure_results[i]
        adventure_val = adventure_list[0][adventure_key]
        storage_7.append((adventure_key, adventure_val))
    print("ADVENTURE")
    print(storage_7)
    
    shooter_results = sorted(shooter_list[0], key=shooter_list[0].get, reverse=True)   
    storage_8 = []
    for i in range(3):
        shooter_key = shooter_results[i]
        shooter_val = shooter_list[0][shooter_key]
        storage_8.append((shooter_key, shooter_val))
    print("SHOOTER")
    print(storage_8) 

    rp_results = sorted(rp_list[0], key=rp_list[0].get, reverse=True)   
    storage_9 = []
    for i in range(3):
        rp_key = rp_results[i]
        rp_val = rp_list[0][rp_key]
        storage_9.append((rp_key, rp_val))
    print("ROLE-PLAYING")
    print(storage_9)

    misc_results = sorted(misc_list[0], key=misc_list[0].get, reverse=True)   
    storage_10 = []
    for i in range(3):
        misc_key = misc_results[i]
        misc_val = misc_list[0][misc_key]
        storage_10.append((misc_key, misc_val))
    print("MISC")
    print(storage_10) 
    
    sports_results = sorted(sports_list[0], key=sports_list[0].get, reverse=True)   
    storage_11 = []
    for i in range(3):
        sports_key = sports_results[i]
        sports_val = sports_list[0][sports_key]
        storage_11.append((sports_key, sports_val))
    print("SPORTS")
    print(storage_11)
    
    action_results = sorted(action_list[0], key=action_list[0].get, reverse=True)   
    storage_12 = []
    for i in range(3):
        action_key = action_results[i]
        action_val = action_list[0][action_key]
        storage_12.append((action_key, action_val))
    print("ACTION")
    print(storage_12)
    
 
    
    
    
