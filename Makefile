########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = ARHAMRIAZALI
SID = 1001851399
EMAIL = ARA1399@MAVS.UTA.EDU
SEMESTER = SPRING2025
PROJECT=PROJ03
LINK = https://youtu.be/yCIrxhS5iz0
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"