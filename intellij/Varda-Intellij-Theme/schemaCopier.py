import sys

def replace_text_in_file(input_file, output_file):
    try:
        with open(input_file, 'r') as file:
            file_data = file.read()

        # Replace the text
        file_data = file_data.replace("Varda", "Everforest")
        # white
        file_data = file_data.replace("D0EBEE", "D3C6AA")
        # black
        file_data = file_data.replace("0C0E11", "1E2326")
        # greys
        file_data = file_data.replace("121519", "272E33")
        file_data = file_data.replace("171B21", "2E383C")
        file_data = file_data.replace("1C2128", "374145")
        file_data = file_data.replace("222830", "414B50")
        file_data = file_data.replace("272E38", "495156")
        file_data = file_data.replace("38414F", "4F5B58")
        # primary
        file_data = file_data.replace("52677C", "A7C080")
        # primary alt
        file_data = file_data.replace("8295A9", "7A8478")
        # secondary
        file_data = file_data.replace("665276", "D699B6")
        # tertiary / warning / yellow
        file_data = file_data.replace("C78C56", "DBBC7F")
        # error / red
        file_data = file_data.replace("733447", "E67E80")
        # success / green
        file_data = file_data.replace("257B76", "83C092")

        # Write the new content to the output file
        with open(output_file, 'w') as file:
            file.write(file_data)

        print(f"File processed and saved as {output_file}")

    except FileNotFoundError:
        print(f"The file {input_file} does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_file> <output_file>")
    else:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        replace_text_in_file(input_file, output_file)