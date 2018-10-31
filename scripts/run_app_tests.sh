#! /bin/bash
set -e
sh scripts/run_test.sh create_rectangle.js app_test_data/allRectangleInputs app_test_data/allRectangleOutputs
sh scripts/run_test.sh create_triangle.js app_test_data/allTriangleInputs app_test_data/allTriangleOutputs
sh scripts/run_test.sh create_diamond.js app_test_data/allDiamondInputs app_test_data/allDiamondOutputs
